// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Solar System", path: "/solar-system" },
    { name: "Missions", path: "/missions" },
    { name: "Black Holes", path: "/black-holes" },
    { name: "Training", path: "/training" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl text-purple-400 font-bold font-[Orbitron] tracking-widest">Cosmic Explorer</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-purple-400 transition duration-300 font-medium ${
                  location.pathname === item.path ? "text-purple-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
