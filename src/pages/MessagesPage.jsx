import React from 'react';

const MessagesPage = () => {
  return (
    <div className="container-custom py-12">
      {/* Top Header Section */}
      <div className="bg-primary rounded-[24px] p-10 md:p-14 text-white shadow-xl mb-10">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">INTERACTION / MESSAGING</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4 max-w-4xl tracking-tight">
          Keep support moving through direct communication.
        </h1>
        <p className="text-gray-300 text-lg">
          Basic messaging gives helpers and requesters a clear follow-up path once a match happens.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Recent Messages */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-[#EAECEB]">
             <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">CONVERSATION STREAM</p>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Recent messages</h2>
             
             <div className="space-y-4">
               {/* Message Card 1 */}
               <div className="flex items-center justify-between p-6 border border-[#EAECEB] rounded-[16px] hover:border-gray-300 transition-colors cursor-pointer group">
                 <div className="pr-6">
                   <h3 className="font-bold text-[15px] mb-2 text-primary group-hover:text-accent transition-colors">Ayesha Khan &rarr; Sara Noor</h3>
                   <p className="text-[14px] text-textMuted leading-relaxed">
                     I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.
                   </p>
                 </div>
                 <div className="shrink-0 w-14 h-14 bg-[#E8F2F0] text-primary rounded-full flex flex-col items-center justify-center border border-[#D6E6E1]">
                   <span className="text-[13px] font-bold leading-none mb-0.5">09:45</span>
                   <span className="text-[10px] font-bold leading-none">AM</span>
                 </div>
               </div>

               {/* Message Card 2 */}
               <div className="flex items-center justify-between p-6 border border-[#EAECEB] rounded-[16px] hover:border-gray-300 transition-colors cursor-pointer group">
                 <div className="pr-6">
                   <h3 className="font-bold text-[15px] mb-2 text-primary group-hover:text-accent transition-colors">Hassan Ali &rarr; Ayesha Khan</h3>
                   <p className="text-[14px] text-textMuted leading-relaxed">
                     Your event poster concept is solid. I would tighten the CTA and reduce the background texture.
                   </p>
                 </div>
                 <div className="shrink-0 w-14 h-14 bg-[#E8F2F0] text-primary rounded-full flex flex-col items-center justify-center border border-[#D6E6E1]">
                   <span className="text-[13px] font-bold leading-none mb-0.5">11:10</span>
                   <span className="text-[10px] font-bold leading-none">AM</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-[#EAECEB] sticky top-28">
             <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-4">SEND MESSAGE</p>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Start a conversation</h2>
             
             <div className="space-y-6">
                {/* To Dropdown */}
                <div>
                  <label className="block text-[14px] font-bold mb-3 text-primary">To</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 appearance-none outline-none text-[15px] text-textMain focus:border-gray-400 transition-colors">
                      <option>Ayesha Khan</option>
                      <option>Sara Noor</option>
                      <option>Hassan Ali</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-textMain">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[14px] font-bold mb-3 text-primary">Message</label>
                  <textarea 
                    placeholder="Share support details, ask for files, or suggest next steps."
                    className="w-full bg-white border border-[#EAECEB] rounded-xl p-4 outline-none text-[15px] text-textMain placeholder-gray-400 min-h-[140px] resize-y focus:border-gray-400 transition-colors"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button className="w-full bg-accent hover:bg-accent-hover text-white rounded-full py-4 text-[15px] font-bold transition-colors shadow-sm mt-2">
                  Send
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MessagesPage;
