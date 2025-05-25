import React from 'react';
import {MdOutlineSearch, MdNotifications, MdHelp, MdAccountCircle } from 'react-icons/md';
import Navbar from './Navbar';

function HeaderIconButton({ icon, label })
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

function Header()
{
  const navIcons = [
    { icon: MdNotifications, label: 'Notifications' },
    { icon: MdHelp, label: 'Help' },
    { icon: MdAccountCircle, label: 'Account' }
  ];

  const isHome = location.pathname === '/home' || '/' ? 'sticky': 'none';

  return (
    <div className={`w-full py-4 px-6 shadow-sm bg-white top-0 z-10 ${isHome}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-green-700">Hotel Booking</h3>
        <Navbar/>
        <form className="flex items-center border rounded-sm border-gray-200 px-2">
        <input type="text" className='w-60 h-10 focus:border-none focus:outline-none py-2' placeholder='What are you looking for?'/>
        <button type='submit' className='hover:cursor-pointer'>
        <MdOutlineSearch className='text-3xl text-gray-600'/>
        </button>
        </form>
        <ul className="flex gap-2 list-none">
          {navIcons.map((item, index) => (
            <HeaderIconButton 
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

export default Header;