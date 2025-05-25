import { useLocation, Link } from 'react-router-dom';

function NavbarNavItem({ label, path }) {
  const location = useLocation();
  const isActive = location.pathname === `/${path}`;

  return (
    <Link to={`/${path}`} className={`flex items-center px-4 py-2 cursor-pointer transition-all text-center ${isActive ? 'border-b-4 border-green-600 text-black' : 'bg-white'}`}>
    <li className='w-full h-full capitalize'>
          {label}
      </li>
      </Link>
  );
}



function Navbar() 
{
  const navItems = [
  { label: "Home", path: "home" },
  { label: "Explore Hotels", path: "search" },
  { label: "Favorites", path: "favorites" },
  { label: "My Bookings", path: "bookings" },
  { label: "Support", path: "support" },
]

  return (
    <div className="flex">
      <ul className="flex gap-4 font-semibold text-sm">
        {navItems.map((item, index) => (
            <NavbarNavItem 
              key={index}
              label={item.label}
              path={item.path}
            />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;