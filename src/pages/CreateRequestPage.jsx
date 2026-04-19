import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const CreateRequestPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleSubmit = async () => {
    if (!title || !description || !category || !urgency) {
      alert("Please fill all required fields");
      return;
    }

    // Must be logged in
    if (!user) {
      alert("Please log in to post a request");
      navigate('/auth');
      return;
    }

    setLoading(true);
    try {
      const tagsArray = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

      await addDoc(collection(db, 'requests'), {
        title,
        description,
        category,
        urgency,
        tags: tagsArray,
        authorId: user.uid,
        authorName: user.fullName || user.email.split('@')[0],
        status: 'open',
        interestedHelpers: [],
        createdAt: serverTimestamp(),
      });

      navigate('/explore');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to post request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-custom py-12 max-w-4xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-primary mb-4">Post a request</h1>
        <p className="text-textMuted text-lg">Describe what you need help with. The more context you provide, the better the community can assist you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-[2rem] shadow-soft border border-gray-50">
            <div>
               <label className="block text-sm font-bold mb-2 text-textMain">Title</label>
               <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium text-lg placeholder:font-normal" 
                  placeholder="e.g. Need help making my portfolio responsive" 
               />
            </div>
            
            <div>
               <label className="block text-sm font-bold mb-2 text-textMain">Description</label>
               <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-[200px]" 
                  placeholder="Explain the problem you're facing, what you've tried so far, and what specific guidance you need."
               ></textarea>
               <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-textMuted">Markdown is supported.</span>
                  <button type="button" className="text-sm font-medium text-accent hover:text-accent-hover flex items-center gap-1">
                     <span className="text-lg leading-none">✨</span> AI Rewrite
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold mb-2 text-textMain">Category</label>
                  <select 
                     value={category}
                     onChange={(e) => setCategory(e.target.value)}
                     className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-accent"
                  >
                     <option value="">Select a category</option>
                     <option value="Web Development">Web Development</option>
                     <option value="Design">Design</option>
                     <option value="Career / Mentorship">Career / Mentorship</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-bold mb-2 text-textMain">Urgency</label>
                  <select 
                     value={urgency}
                     onChange={(e) => setUrgency(e.target.value)}
                     className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-accent"
                  >
                     <option value="">Select urgency level</option>
                     <option value="Low">Low (Whenever possible)</option>
                     <option value="Medium">Medium (Within a few days)</option>
                     <option value="High">High (ASAP / Blocker)</option>
                  </select>
               </div>
            </div>

            <div>
               <label className="block text-sm font-bold mb-2 text-textMain">Tags</label>
               <input 
                  type="text" 
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-accent" 
                  placeholder="e.g. React, Tailwind, Flexbox (comma separated)" 
               />
               <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs text-textMuted mt-1 mr-2">Suggested:</span>
                  <button type="button" onClick={() => setTagsInput(prev => prev ? prev + ', HTML/CSS' : 'HTML/CSS')} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100 hover:bg-green-100 transition-colors">+ HTML/CSS</button>
                  <button type="button" onClick={() => setTagsInput(prev => prev ? prev + ', Responsive Design' : 'Responsive Design')} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100 hover:bg-green-100 transition-colors">+ Responsive Design</button>
               </div>
            </div>

            <div className="pt-4 flex justify-end gap-4">
               <button onClick={() => navigate(-1)} className="px-6 py-3 border border-gray-200 text-textMain rounded-full font-medium hover:bg-gray-50 transition-colors">
                  Cancel
               </button>
               <button 
                  onClick={handleSubmit} 
                  disabled={loading}
                  className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors shadow-sm disabled:opacity-70"
               >
                  {loading ? 'Publishing...' : 'Publish Request'}
               </button>
            </div>
         </div>

         <div className="lg:col-span-1">
            <div className="bg-primary rounded-[2rem] p-8 text-white sticky top-28 shadow-xl">
               <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="text-green-300">✨</span> AI Assistant
               </h3>
               <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  As you type, HelpHub AI will analyze your request and suggest categories, tags, and ways to make your problem clearer for the community.
               </p>
               
               {title.length > 10 ? (
                  <div className="bg-white/10 rounded-xl p-4 mb-4 backdrop-blur-sm border border-white/5">
                     <p className="text-xs font-bold text-green-300 uppercase tracking-wider mb-2">Detected Category</p>
                     <p className="font-medium text-sm">{category || 'Web Development'}</p>
                  </div>
               ) : (
                  <div className="bg-black/20 rounded-xl p-4 mb-4 border border-white/5 border-dashed">
                     <p className="text-sm text-gray-400 italic">Start typing to see suggestions...</p>
                  </div>
               )}
               
               <div className="mt-8 bg-green-900/40 border border-green-800/50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">Pro Tip</p>
                  <p className="text-sm text-green-100">Requests with specific tags get matched 40% faster. Make sure to list the exact tools you're using.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CreateRequestPage;
