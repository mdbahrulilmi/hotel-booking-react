import React from 'react';
import { MdNotifications, MdHelp, MdAccountCircle } from 'react-icons/md';

function NavbarIconButton({ icon, label })
{
  const Icon = icon;
  
  return (
    <li className="flex items-center">
      <button className="p-2 rounded-full hover:bg-gray-100 text-gray-700" aria-label={label}>
        <Icon className="text-xl" />
      </button>
    </li>
  );
};

function Navbar()
{
  const navIcons = [
    { icon: MdNotifications, label: 'Notifications' },
    { icon: MdHelp, label: 'Help' },
    { icon: MdAccountCircle, label: 'Account' }
  ];

  return (
    <div className="w-full py-4 px-6 shadow-sm bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-green-700">Hotel Booking</h3>
        
        <ul className="flex gap-2 list-none">
          {navIcons.map((item, index) => (
            <NavbarIconButton 
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;