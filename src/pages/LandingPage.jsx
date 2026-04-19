import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container-custom py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-bold tracking-widest text-accent uppercase mb-6">
            SMIT GRAND CODING NIGHT 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#162724] leading-[1.05] mb-6">
            Find help faster.<br/>Become help that<br/>matters.
          </h1>
          <p className="text-textMuted text-[17px] max-w-[90%] mb-10 leading-relaxed font-medium">
            HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/dashboard" className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm inline-block text-[15px]">
              Open product demo
            </Link>
            <Link to="/create-request" className="bg-white border border-gray-200 hover:border-gray-300 text-textMain px-6 py-3 rounded-full font-medium transition-colors shadow-sm inline-block text-[15px]">
              Post a request
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50/50">
              <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-3">Members</p>
              <h3 className="text-[32px] font-bold text-primary mb-2 leading-none">384+</h3>
              <p className="text-[13px] text-textMuted leading-snug font-medium">Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50/50">
              <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-3">Requests</p>
              <h3 className="text-[32px] font-bold text-primary mb-2 leading-none">54+</h3>
              <p className="text-[13px] text-textMuted leading-snug font-medium">Support posts shared across learning journeys.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-gray-50/50">
              <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-3">Solved</p>
              <h3 className="text-[32px] font-bold text-primary mb-2 leading-none">23+</h3>
              <p className="text-[13px] text-textMuted leading-snug font-medium">Problems resolved through fast community action.</p>
            </div>
          </div>
        </div>

        {/* Right Side Dark Box */}
        <div className="bg-[#182C25] rounded-[2rem] p-10 lg:p-12 text-white shadow-xl flex flex-col">
          <p className="text-[11px] font-bold text-[#6FE3A1] uppercase tracking-widest mb-4">Live Product Feel</p>
          <h2 className="text-4xl md:text-[44px] font-bold leading-[1.1] mb-6 tracking-tight text-[#F9F6F0]">
            More than a form.<br/>More like an<br/>ecosystem.
          </h2>
          <p className="text-gray-300/90 text-[15px] mb-12 leading-relaxed max-w-[95%] font-medium">
            A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, notifications, and leaderboard momentum built directly in HTML, CSS, JavaScript, and LocalStorage.
          </p>

          <div className="space-y-4 mt-auto">
            <div className="bg-[#F9F6F0] text-[#182C25] p-6 rounded-2xl">
              <h4 className="font-bold text-[17px] mb-2">AI request intelligence</h4>
              <p className="text-[13px] text-gray-600 font-medium">Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
            </div>
            <div className="bg-[#F9F6F0] text-[#182C25] p-6 rounded-2xl">
              <h4 className="font-bold text-[17px] mb-2">Community trust graph</h4>
              <p className="text-[13px] text-gray-600 font-medium">Badges, helper rankings, trust score boosts, and visible contribution history.</p>
            </div>
            <div className="bg-[#F9F6F0] text-[#182C25] p-6 rounded-2xl flex items-center justify-between">
              <h4 className="font-bold text-[32px]">92%</h4>
              <p className="text-[12px] text-gray-600 font-medium max-w-[180px] text-right leading-tight">Top trust score currently active across the sample mentor network.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Flow Section */}
      <div className="mb-32">
         <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">CORE FLOW</p>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-primary">From struggling alone to solving together</h2>
            <button className="bg-white border border-gray-200 text-textMain px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:bg-gray-50 whitespace-nowrap">
               Try onboarding AI
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
               <h3 className="text-[19px] font-bold mb-3 text-primary">Ask for help clearly</h3>
               <p className="text-[15px] text-textMuted leading-relaxed font-medium">Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-soft">
               <h3 className="text-[19px] font-bold mb-3 text-primary">Discover the right people</h3>
               <p className="text-[15px] text-textMuted leading-relaxed font-medium">Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-soft">
               <h3 className="text-[19px] font-bold mb-3 text-primary">Track real contribution</h3>
               <p className="text-[15px] text-textMuted leading-relaxed font-medium">Trust scores, badges, solved requests, and rankings help the community recognize meaningful support.</p>
            </div>
         </div>
      </div>

      {/* Featured Requests Section */}
      <div className="mb-20">
         <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">FEATURED REQUESTS</p>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-primary">Community problems currently in motion</h2>
            <Link to="/explore" className="bg-white border border-gray-200 text-textMain px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:bg-gray-50 whitespace-nowrap">
               View full feed
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-50 flex flex-col">
               <div className="flex gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Web Development</span>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-bold border border-red-100/50">High</span>
                  <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-[11px] font-bold border border-gray-200/50">Open</span>
               </div>
               <h3 className="text-xl font-bold mb-3 text-primary leading-tight">Need help making my portfolio responsive before demo day</h3>
               <p className="text-[15px] text-textMuted mb-6 leading-relaxed font-medium">My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.</p>
               
               <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">HTML/CSS</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Responsive</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Portfolio</span>
               </div>

               <div className="flex items-center justify-between mt-auto">
                  <div>
                     <div className="font-bold text-[14px] text-primary">Sara Noor</div>
                     <div className="text-[12px] text-textMuted font-medium mt-0.5">Karachi • 1 helper interested</div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[13px] font-bold transition-colors text-primary">
                     Open details
                  </button>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-50 flex flex-col">
               <div className="flex gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Design</span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold border border-blue-100/50">Medium</span>
                  <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-[11px] font-bold border border-gray-200/50">Open</span>
               </div>
               <h3 className="text-xl font-bold mb-3 text-primary leading-tight">Looking for Figma feedback on a volunteer event poster</h3>
               <p className="text-[15px] text-textMuted mb-6 leading-relaxed font-medium">I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.</p>
               
               <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Figma</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Poster</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Design Review</span>
               </div>

               <div className="flex items-center justify-between mt-auto">
                  <div>
                     <div className="font-bold text-[14px] text-primary">Ayesha Khan</div>
                     <div className="text-[12px] text-textMuted font-medium mt-0.5">Lahore • 1 helper interested</div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[13px] font-bold transition-colors text-primary">
                     Open details
                  </button>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-50 flex flex-col">
               <div className="flex gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-green-50/80 text-accent text-[11px] font-bold border border-green-100/50">Career</span>
                  <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-[11px] font-bold border border-gray-200/50">Low</span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[11px] font-bold border border-green-200/50">Solved</span>
               </div>
               <h3 className="text-xl font-bold mb-3 text-primary leading-tight">Need mock interview support for internship applications</h3>
               <p className="text-[15px] text-textMuted mb-6 leading-relaxed font-medium">Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.</p>
               
               <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Interview Prep</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Career</span>
                  <span className="text-[12px] px-3 py-1.5 bg-[#F6F8F7] text-accent font-medium rounded-full">Frontend</span>
               </div>

               <div className="flex items-center justify-between mt-auto">
                  <div>
                     <div className="font-bold text-[14px] text-primary">Sara Noor</div>
                     <div className="text-[12px] text-textMuted font-medium mt-0.5">Remote • 2 helpers interested</div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-[13px] font-bold transition-colors text-primary">
                     Open details
                  </button>
               </div>
            </div>
         </div>
      </div>
      
      <div className="text-center text-xs text-textMuted/60 pb-8">
         HelpHub AI is built as a premium-feel, multi-page community support product using HTML, CSS, JavaScript, and LocalStorage.
      </div>
    </div>
  );
};

export default LandingPage;
