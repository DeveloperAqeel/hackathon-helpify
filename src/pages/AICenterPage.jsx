import React from 'react';

const AICenterPage = () => {
  return (
    <div className="container-custom py-12">
      {/* Top Header Section */}
      <div className="bg-primary rounded-[24px] p-10 md:p-14 text-white shadow-xl mb-10">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">AI CENTER</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4 max-w-4xl tracking-tight">
          See what the platform intelligence is noticing.
        </h1>
        <p className="text-gray-300 text-lg">
          AI-like insights summarize demand trends, helper readiness, urgency signals, and request recommendations.
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#EAECEB]">
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">TREND PULSE</p>
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Web Development</h2>
          <p className="text-[14px] text-textMuted leading-relaxed">
            Most common support area based on active community requests.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#EAECEB]">
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">URGENCY WATCH</p>
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">1</h2>
          <p className="text-[14px] text-textMuted leading-relaxed">
            Requests currently flagged high priority by the urgency detector.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[#EAECEB]">
          <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">MENTOR POOL</p>
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">2</h2>
          <p className="text-[14px] text-textMuted leading-relaxed">
            Trusted helpers with strong response history and contribution signals.
          </p>
        </div>

      </div>

      {/* Recommendations Section */}
      <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-[#EAECEB]">
         <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">AI RECOMMENDATIONS</p>
         <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Requests needing attention</h2>
         
         <div className="space-y-4">
            
            {/* Item 1 */}
            <div className="p-6 border border-[#EAECEB] rounded-[16px] hover:border-gray-300 transition-colors">
               <h3 className="font-bold text-[15px] mb-2 text-primary">Need help making my portfolio responsive before demo day</h3>
               <p className="text-[14px] text-textMuted leading-relaxed mb-4">
                 Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries.
               </p>
               <div className="flex gap-2">
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Web Development</span>
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">High</span>
               </div>
            </div>

            {/* Item 2 */}
            <div className="p-6 border border-[#EAECEB] rounded-[16px] hover:border-gray-300 transition-colors">
               <h3 className="font-bold text-[15px] mb-2 text-primary">Looking for Figma feedback on a volunteer event poster</h3>
               <p className="text-[14px] text-textMuted leading-relaxed mb-4">
                 A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value.
               </p>
               <div className="flex gap-2">
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Design</span>
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Medium</span>
               </div>
            </div>

            {/* Item 3 */}
            <div className="p-6 border border-[#EAECEB] rounded-[16px] hover:border-gray-300 transition-colors">
               <h3 className="font-bold text-[15px] mb-2 text-primary">Need mock interview support for internship applications</h3>
               <p className="text-[14px] text-textMuted leading-relaxed mb-4">
                 Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews.
               </p>
               <div className="flex gap-2">
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Career</span>
                 <span className="text-[12px] font-bold px-4 py-1.5 bg-[#E8F2F0] text-primary rounded-full border border-[#D6E6E1]">Low</span>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default AICenterPage;
