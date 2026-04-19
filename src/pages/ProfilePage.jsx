import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div className="container-custom py-12">
      {/* Top Header Section */}
      <div className="bg-primary rounded-[24px] p-10 md:p-14 text-white shadow-xl mb-10">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">PROFILE</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4 tracking-tight">
          {user?.fullName || user?.email || 'Ayesha Khan'}
        </h1>
        <p className="text-gray-300 text-lg">
          Both &bull; {user?.location || 'Karachi'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Public Profile Info */}
        <div>
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-[#EAECEB] h-full">
             <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">PUBLIC PROFILE</p>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Skills and reputation</h2>
             
             {/* Stats Rows */}
             <div className="flex justify-between items-center border-b border-gray-100 py-4">
                <span className="text-[15px] text-textMain">Trust score</span>
                <span className="text-[15px] font-bold text-primary">92%</span>
             </div>
             <div className="flex justify-between items-center border-b border-gray-100 py-4 mb-6">
                <span className="text-[15px] text-textMain">Contributions</span>
                <span className="text-[15px] font-bold text-primary">31</span>
             </div>

             {/* Skills */}
             <div className="mb-6">
               <h3 className="text-[15px] font-bold text-primary mb-3">Skills</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">Figma</span>
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">UI/UX</span>
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">HTML/CSS</span>
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">Career Guidance</span>
               </div>
             </div>

             {/* Badges */}
             <div>
               <h3 className="text-[15px] font-bold text-primary mb-3">Badges</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">Design Ally</span>
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">Fast Responder</span>
                 <span className="px-4 py-1.5 rounded-full bg-[#E8F2F0] text-primary text-[13px] font-bold border border-[#D6E6E1]">Top Mentor</span>
               </div>
             </div>

          </div>
        </div>

        {/* Right Column: Edit Profile Form */}
        <div>
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-[#EAECEB]">
             <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">EDIT PROFILE</p>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Update your identity</h2>
             
             <form className="space-y-6">
                {/* 2 Col Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-bold mb-3 text-primary">Name</label>
                    <input 
                      type="text" 
                      defaultValue={user?.fullName || user?.email || ''}
                      className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 outline-none text-[14px] text-textMain focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-bold mb-3 text-primary">Location</label>
                    <input 
                      type="text" 
                      defaultValue="Karachi"
                      className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 outline-none text-[14px] text-textMain focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Skills Input */}
                <div>
                  <label className="block text-[14px] font-bold mb-3 text-primary">Skills</label>
                  <input 
                    type="text" 
                    defaultValue="Figma, UI/UX, HTML/CSS, Career Guidance"
                    className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 outline-none text-[14px] text-textMain focus:border-gray-400 transition-colors"
                  />
                </div>

                {/* Interests Input */}
                <div>
                  <label className="block text-[14px] font-bold mb-3 text-primary">Interests</label>
                  <input 
                    type="text" 
                    defaultValue="Hackathons, UI/UX, Community Building"
                    className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 outline-none text-[14px] text-textMain focus:border-gray-400 transition-colors"
                  />
                </div>

                {/* Save Button */}
                <button 
                  type="button"
                  className="w-full bg-accent hover:bg-accent-hover text-white rounded-full py-4 text-[15px] font-bold transition-colors shadow-sm mt-4"
                >
                  Save profile
                </button>
             </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
