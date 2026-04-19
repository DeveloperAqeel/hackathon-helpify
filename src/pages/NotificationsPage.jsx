import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New helper matched to your responsive portfolio request",
      subtitle: "Match • 12 min ago",
      read: false
    },
    {
      id: 2,
      title: "Your trust score increased after a solved request",
      subtitle: "Reputation • 1 hr ago",
      read: false
    },
    {
      id: 3,
      title: "AI Center detected rising demand for interview prep",
      subtitle: "Insight • Today",
      read: true
    }
  ]);

  const toggleRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: !notif.read } : notif
    ));
  };

  return (
    <div className="container-custom py-12">
      <div className="bg-[#242E2B] rounded-[2rem] p-10 lg:p-12 text-white shadow-xl mb-10">
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">NOTIFICATIONS</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl tracking-tight">
          Stay updated on requests, helpers, and trust signals.
        </h1>
        <p className="text-gray-300 text-[17px] font-medium">
          Track new matches, solved items, AI insights, and reputation changes in one place.
        </p>
      </div>
      
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-soft border border-gray-50/50">
         <p className="text-[11px] font-bold text-accent uppercase tracking-widest mb-6">LIVE UPDATES</p>
         <h2 className="text-3xl font-bold mb-8 tracking-tight text-primary">Notification feed</h2>
         <div className="space-y-4">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`flex items-center justify-between p-6 border rounded-2xl transition-colors ${
                  notif.read ? 'border-gray-100 bg-gray-50/30' : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                }`}
              >
                 <div>
                    <h4 className={`font-bold mb-1.5 text-[15px] ${notif.read ? 'text-gray-600' : 'text-primary'}`}>
                      {notif.title}
                    </h4>
                    <p className={`text-[13px] font-medium ${notif.read ? 'text-gray-400' : 'text-textMuted'}`}>
                      {notif.subtitle}
                    </p>
                 </div>
                 <button 
                   onClick={() => toggleRead(notif.id)}
                   className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-colors ${
                     notif.read 
                       ? 'border border-transparent text-gray-500 hover:bg-gray-100' 
                       : 'border border-gray-200 text-primary hover:border-gray-300'
                   }`}
                 >
                   {notif.read ? 'Read' : 'Unread'}
                 </button>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
