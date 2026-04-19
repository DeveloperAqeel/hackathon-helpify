import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { setUser } from '../store/userSlice';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('I need help');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Handle Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
        }));
        
        navigate('/dashboard');
      } else {
        // Handle Signup
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save additional user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          fullName,
          email,
          role,
          trustScore: 0,
          contributions: 0,
          createdAt: new Date().toISOString()
        });

        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          fullName,
          role
        }));
        
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center container-custom py-12">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-soft max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
           <div className="w-12 h-12 bg-accent rounded flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
             H
           </div>
           <h2 className="text-3xl font-bold text-primary mb-2">
             {isLogin ? 'Welcome back' : 'Join the community'}
           </h2>
           <p className="text-textMuted">
             {isLogin ? 'Enter your details to access your dashboard.' : 'Sign up to ask for help or offer it.'}
           </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1 text-textMain">Full Name</label>
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={!isLogin}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-accent transition-colors" 
                placeholder="John Doe" 
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium mb-1 text-textMain">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-accent transition-colors" 
              placeholder="you@example.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-textMain">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-accent transition-colors" 
              placeholder="••••••••" 
            />
          </div>

          {!isLogin && (
            <div>
               <label className="block text-sm font-medium mb-2 text-textMain">Your Primary Role</label>
               <select 
                 value={role}
                 onChange={(e) => setRole(e.target.value)}
                 className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-accent transition-colors"
               >
                  <option>I need help</option>
                  <option>I can help</option>
                  <option>Both</option>
               </select>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-medium transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-textMuted">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }} 
              className="text-accent font-medium hover:underline"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
