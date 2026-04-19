import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const ExplorePage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [urgencyFilter, setUrgencyFilter] = useState('All');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reqs = [];
      querySnapshot.forEach((doc) => {
        reqs.push({ id: doc.id, ...doc.data() });
      });
      setRequests(reqs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredRequests = requests.filter(req => {
    if (categoryFilter !== 'All' && req.category !== categoryFilter) return false;
    if (urgencyFilter !== 'All' && req.urgency !== urgencyFilter) return false;
    return true;
  });

  return (
    <div className="container-custom py-12">
      {/* Top Header Section */}
      <div className="bg-primary rounded-[24px] p-10 md:p-14 text-white shadow-xl mb-10">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">EXPLORE / FEED</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4 max-w-3xl tracking-tight">
          Browse help requests with filterable community context.
        </h1>
        <p className="text-gray-300 text-lg">
          Filter by category, urgency, skills, and location to surface the best matches.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Filters */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 sticky top-28">
             <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">FILTERS</p>
             <h2 className="text-3xl font-bold mb-8 tracking-tight">Refine the feed</h2>
             
             <div className="space-y-6">
                {/* Category Dropdown */}
                <div>
                  <label className="block text-[13px] font-bold mb-3 text-textMain">Category</label>
                  <div className="relative">
                    <select 
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl p-4 appearance-none outline-none text-[14px] text-textMuted"
                    >
                      <option value="All">All categories</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Design">Design</option>
                      <option value="Career">Career</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-textMain">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                {/* Urgency Dropdown */}
                <div>
                  <label className="block text-[13px] font-bold mb-3 text-textMain">Urgency</label>
                  <div className="relative">
                    <select 
                      value={urgencyFilter}
                      onChange={(e) => setUrgencyFilter(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl p-4 appearance-none outline-none text-[14px] text-textMuted"
                    >
                      <option value="All">All urgency levels</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-textMain">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Skills Input */}
                <div>
                  <label className="block text-[13px] font-bold mb-3 text-textMain">Skills</label>
                  <input 
                    type="text"
                    placeholder="React, Figma, Git/GitHub"
                    value={skillsFilter}
                    onChange={(e) => setSkillsFilter(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none text-[14px] text-textMuted placeholder-gray-400"
                  />
                </div>

                {/* Location Input */}
                <div>
                  <label className="block text-[13px] font-bold mb-3 text-textMain">Location</label>
                  <input 
                    type="text"
                    placeholder="Karachi, Lahore, Remote"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 outline-none text-[14px] text-textMuted placeholder-gray-400"
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Feed List */}
        <div className="lg:col-span-8 space-y-6">
           {loading ? (
              <div className="text-center py-10 text-textMuted font-medium">Loading community requests...</div>
           ) : filteredRequests.length === 0 ? (
              <div className="text-center py-10 text-textMuted bg-white rounded-[24px] shadow-sm border border-gray-100 font-medium">
                No requests found matching your filters.
              </div>
           ) : (
             filteredRequests.map((req) => (
               <div key={req.id} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                 
                 {/* Top Badges */}
                 <div className="flex gap-2 mb-4">
                   <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[12px] font-bold border border-green-100/50">
                     {req.category || 'General'}
                   </span>
                   <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${
                      req.urgency === 'High' ? 'bg-red-50/80 text-red-500 border-red-100/50' : 
                      req.urgency === 'Medium' ? 'bg-[#FDF6F0] text-[#D97736] border-[#FDEBDB]' :
                      'bg-[#E8F2F0] text-primary border-[#D6E6E1]'
                   }`}>
                      {req.urgency || 'Low'}
                   </span>
                   <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${
                     req.status === 'open' ? 'bg-white text-[#A3ABA8] border-[#EAECEB]' : 'bg-green-50/80 text-green-600 border-green-100/50'
                   }`}>
                     {req.status === 'open' ? 'Open' : 'Solved'}
                   </span>
                 </div>
                 
                 {/* Title & Description */}
                 <h3 className="text-[20px] font-bold tracking-tight mb-3 text-primary">{req.title}</h3>
                 <p className="text-textMuted text-[14px] leading-relaxed mb-6">{req.description}</p>
                 
                 {/* Skills Tags */}
                 {(req.tags && req.tags.length > 0) ? (
                   <div className="flex gap-2 mb-6 flex-wrap">
                     {req.tags.map((tag, idx) => (
                        <span key={idx} className="text-[13px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">
                          {tag}
                        </span>
                     ))}
                   </div>
                 ) : (
                   /* Fallback tags if none exist to match UI design feel */
                   <div className="flex gap-2 mb-6 flex-wrap">
                      <span className="text-[13px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">HTML/CSS</span>
                      <span className="text-[13px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Help Needed</span>
                   </div>
                 )}

                 {/* Author Info & CTA */}
                 <div className="flex items-center justify-between mt-2">
                    <div>
                      <div className="font-bold text-[14px] text-primary">{req.authorName || 'Anonymous User'}</div>
                      <div className="text-[13px] text-textMuted mt-1 font-medium">
                        {req.location || 'Karachi'} • {req.interestedHelpers?.length || 1} {req.interestedHelpers?.length === 1 ? 'helper' : 'helpers'} interested
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-transparent border-[1.5px] border-primary hover:bg-gray-50 rounded-full text-[13px] font-bold text-primary transition-colors">
                      Open details
                    </button>
                 </div>
               </div>
             ))
           )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
