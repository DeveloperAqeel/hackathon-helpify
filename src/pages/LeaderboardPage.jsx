import React from 'react';

const LeaderboardPage = () => {
  return (
    <div className="container-custom py-12">
      <div className="bg-primary rounded-3xl p-10 text-white shadow-xl mb-10">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">LEADERBOARD</p>
        <h1 className="text-5xl font-bold leading-tight mb-4 max-w-4xl">
          Recognize the people who keep the community moving.
        </h1>
        <p className="text-gray-300 text-lg">
          Trust score, contribution count, and badges create visible momentum for reliable helpers.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white rounded-3xl p-8 shadow-soft">
           <p className="text-xs font-bold text-accent uppercase tracking-widest mb-6">TOP HELPERS</p>
           <h2 className="text-4xl font-bold mb-8">Rankings</h2>
           <div className="space-y-4">
              {/* Mock ranking item */}
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-gray-200 transition-colors">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">AK</div>
                    <div>
                       <div className="font-bold text-lg">#1 Ayesha Khan</div>
                       <div className="text-sm text-textMuted">Figma, UI/UX, HTML/CSS</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="font-bold text-lg">92%</div>
                    <div className="text-xs text-textMuted">31 contributions</div>
                 </div>
              </div>
           </div>
         </div>
         <div className="bg-white rounded-3xl p-8 shadow-soft">
           <p className="text-xs font-bold text-accent uppercase tracking-widest mb-6">BADGE SYSTEM</p>
           <h2 className="text-4xl font-bold mb-8">Trust and achievement</h2>
           {/* Badges mock */}
         </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
