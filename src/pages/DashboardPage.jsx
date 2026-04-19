import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const user = useSelector(state => state.user.user);
  
  if (!user) {
     return <div className="container-custom py-12 text-center">Please login to view your dashboard.</div>;
  }

  const firstName = user.fullName ? user.fullName.split(' ')[0] : 'there';
  const fullName = user.fullName || 'Anonymous';

  return (
    <div className="container-custom py-10">
      {/* Dark Header */}
      <div className="bg-[#26312D] rounded-[2rem] p-10 lg:p-12 text-white shadow-xl mb-6">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">DASHBOARD</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight">
          Welcome back, {fullName}.
        </h1>
        <p className="text-gray-300 text-[15px] font-medium">
          Your command center for requests, AI insights, helper momentum, and live community activity.
        </p>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
         <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50 flex flex-col justify-between min-h-[140px]">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">TRUST SCORE</p>
            <h3 className="text-3xl font-bold text-primary mb-2">92%</h3>
            <p className="text-[12px] text-textMuted font-medium leading-snug">Driven by solved requests and consistent support.</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50 flex flex-col justify-between min-h-[140px]">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">HELPING</p>
            <h3 className="text-3xl font-bold text-primary mb-2">2</h3>
            <p className="text-[12px] text-textMuted font-medium leading-snug">Requests where you are currently listed as a helper.</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50 flex flex-col justify-between min-h-[140px]">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">OPEN REQUESTS</p>
            <h3 className="text-3xl font-bold text-primary mb-2">2</h3>
            <p className="text-[12px] text-textMuted font-medium leading-snug">Community requests currently active across the feed.</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50 flex flex-col justify-between min-h-[140px]">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">AI PULSE</p>
            <h3 className="text-3xl font-bold text-primary mb-2">1 trends</h3>
            <p className="text-[12px] text-textMuted font-medium leading-snug">Trend count detected in the latest request activity.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Left Column: Recent Requests */}
         <div className="lg:col-span-2">
            <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-3">RECENT REQUESTS</p>
            <div className="flex justify-between items-end mb-6">
               <h2 className="text-[28px] font-bold text-primary leading-tight max-w-[300px]">What the community needs right now</h2>
               <Link to="/explore" className="bg-white border border-gray-200 text-primary px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                  Go to feed
               </Link>
            </div>

            <div className="space-y-4">
               {/* Card 1 */}
               <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50 flex flex-col">
                  <div className="flex gap-2 mb-4">
                     <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Web Development</span>
                     <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-bold border border-red-100/50">High</span>
                     <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-[11px] font-bold border border-gray-200/50">Open</span>
                  </div>
                  <h3 className="text-[19px] font-bold mb-3 text-primary leading-tight">Need help making my portfolio responsive before demo day</h3>
                  <p className="text-[14px] text-textMuted mb-6 leading-relaxed font-medium">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">HTML/CSS</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Responsive</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Portfolio</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                     <div>
                        <div className="font-bold text-[13px] text-primary">Sara Noor</div>
                        <div className="text-[11px] text-textMuted font-medium mt-0.5">Karachi • 1 helper interested</div>
                     </div>
                     <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[12px] font-bold transition-colors text-primary">
                        Open details
                     </button>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50 flex flex-col">
                  <div className="flex gap-2 mb-4">
                     <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Design</span>
                     <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold border border-blue-100/50">Medium</span>
                     <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-[11px] font-bold border border-gray-200/50">Open</span>
                  </div>
                  <h3 className="text-[19px] font-bold mb-3 text-primary leading-tight">Looking for Figma feedback on a volunteer event poster</h3>
                  <p className="text-[14px] text-textMuted mb-6 leading-relaxed font-medium">I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Figma</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Poster</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Design Review</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                     <div>
                        <div className="font-bold text-[13px] text-primary">Ayesha Khan</div>
                        <div className="text-[11px] text-textMuted font-medium mt-0.5">Lahore • 1 helper interested</div>
                     </div>
                     <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[12px] font-bold transition-colors text-primary">
                        Open details
                     </button>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50 flex flex-col">
                  <div className="flex gap-2 mb-4">
                     <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Career</span>
                     <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-[11px] font-bold border border-gray-200/50">Low</span>
                     <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-bold border border-green-200/50">Solved</span>
                  </div>
                  <h3 className="text-[19px] font-bold mb-3 text-primary leading-tight">Need mock interview support for internship applications</h3>
                  <p className="text-[14px] text-textMuted mb-6 leading-relaxed font-medium">Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Interview Prep</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Career</span>
                     <span className="text-[11px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Frontend</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                     <div>
                        <div className="font-bold text-[13px] text-primary">Sara Noor</div>
                        <div className="text-[11px] text-textMuted font-medium mt-0.5">Remote • 2 helpers interested</div>
                     </div>
                     <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[12px] font-bold transition-colors text-primary">
                        Open details
                     </button>
                  </div>
               </div>
            </div>
         </div>
         
         {/* Right Column */}
         <div className="lg:col-span-1 space-y-6 pt-[42px]">
            {/* AI Insights Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50">
               <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">AI INSIGHTS</p>
               <h3 className="font-bold text-[19px] mb-6 text-primary">Suggested actions for you</h3>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                     <span className="text-[13px] text-textMuted font-medium">Most requested category</span>
                     <span className="text-[13px] font-bold text-primary">Web Development</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                     <span className="text-[13px] text-textMuted font-medium">Your strongest trust driver</span>
                     <span className="text-[13px] font-bold text-primary">Design Ally</span>
                  </div>
                  <div className="flex justify-between items-start py-3 border-b border-gray-50">
                     <span className="text-[13px] text-textMuted font-medium w-1/2">AI says you can mentor in</span>
                     <span className="text-[13px] font-bold text-primary text-right w-1/2 leading-tight">HTML/CSS, UI/UX, Career Guidance, Figma</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                     <span className="text-[13px] text-textMuted font-medium">Your active requests</span>
                     <span className="text-[13px] font-bold text-primary">1</span>
                  </div>
               </div>
            </div>

            {/* Notifications Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-50">
               <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">NOTIFICATIONS</p>
               <h3 className="font-bold text-[19px] mb-6 text-primary">Latest updates</h3>
               
               <div className="space-y-3">
                  <div className="p-4 border border-gray-100 rounded-xl flex items-center justify-between">
                     <div>
                        <h4 className="font-bold text-[12px] text-primary leading-tight mb-1">New helper matched to your responsive portfolio request</h4>
                        <p className="text-[11px] text-textMuted">Match • 12 min ago</p>
                     </div>
                     <span className="px-3 py-1.5 bg-[#E8F1EF] text-accent text-[10px] font-bold rounded-full ml-3 shrink-0">Read</span>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-xl flex items-center justify-between">
                     <div>
                        <h4 className="font-bold text-[12px] text-primary leading-tight mb-1">Your trust score increased after a solved request</h4>
                        <p className="text-[11px] text-textMuted">Reputation • 1 hr ago</p>
                     </div>
                     <span className="px-3 py-1.5 bg-[#E8F1EF] text-accent text-[10px] font-bold rounded-full ml-3 shrink-0">Read</span>
                  </div>

                  <div className="p-4 border border-gray-100 rounded-xl flex items-center justify-between">
                     <div>
                        <h4 className="font-bold text-[12px] text-primary leading-tight mb-1">AI Center detected rising demand for interview prep</h4>
                        <p className="text-[11px] text-textMuted">Insight • Today</p>
                     </div>
                     <span className="px-3 py-1.5 bg-[#E8F1EF] text-accent text-[10px] font-bold rounded-full ml-3 shrink-0">Read</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DashboardPage;
