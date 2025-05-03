import { MdHome, MdMeetingRoom, MdPerson, MdMessage, MdRoomService, MdSettings } from 'react-icons/md';

function SidebarNavItem({ icon, label, active })
{
  const Icon = icon;
  
  return (
    <li 
      className={`
        flex items-center gap-3 pl-6 py-3 rounded-lg cursor-pointer transition-all
        ${active 
          ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
          : 'hover:bg-green-600 hover:text-white hover:shadow-sm'}
      `}
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </li>
  );
};

function Sidebar() 
{
  const navItems = [
    { icon: MdHome, label: 'Home', active: false },
    { icon: MdMeetingRoom, label: 'Room', active: false },
    { icon: MdPerson, label: 'Guest', active: true },
    { icon: MdMessage, label: 'Message', active: false },
    { icon: MdRoomService, label: 'Concierge', active: false },
    { icon: MdSettings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-1/6 list-none font-medium flex flex-col gap-1 px-4 py-10">
      <ul className="list-none font-medium flex flex-col gap-2 px-4">
        {navItems.map((item, index) => (
          <SidebarNavItem 
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;