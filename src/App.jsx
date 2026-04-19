import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase/config';
import { setUser } from './store/userSlice';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import LeaderboardPage from './pages/LeaderboardPage';
import NotificationsPage from './pages/NotificationsPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import CreateRequestPage from './pages/CreateRequestPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import AICenterPage from './pages/AICenterPage';

function App() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Just setting basic info, in a real app we might fetch more from Firestore here
        dispatch(setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          fullName: firebaseUser.displayName || firebaseUser.email.split('@')[0],
        }));
      } else {
        dispatch(setUser(null));
      }
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (!authChecked) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-primary font-bold text-xl">Loading HelpHub AI...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background font-sans text-textMain">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/messages" element={user ? <MessagesPage /> : <Navigate to="/auth" />} />
            <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/auth" />} />
            <Route path="/ai-center" element={user ? <AICenterPage /> : <Navigate to="/auth" />} />
            <Route path="/notifications" element={user ? <NotificationsPage /> : <Navigate to="/auth" />} />
            <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/auth" />} />
            <Route path="/create-request" element={user ? <CreateRequestPage /> : <Navigate to="/auth" />} />
            <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
