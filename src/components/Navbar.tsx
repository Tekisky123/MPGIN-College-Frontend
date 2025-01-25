import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "About",
      path: "/about",
      dropdown: [
        "Overview",
        "Vision & Mission",
        "Leadership",
        "Infrastructure",
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      dropdown: ["Programs", "Departments", "Faculty", "Research"],
    },
    {
      name: "Admissions",
      path: "/admissions",
      dropdown: ["Process", "Eligibility", "Fee Structure", "Scholarships"],
    },
    {
      name: "Campus Life",
      path: "/campus-life",
      dropdown: ["Facilities", "Hostels", "Activities", "Clubs"],
    },
    { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and MPGIN Text */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="MPGIN Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[#0860b1] font-bold text-lg">MPGIN</span>
              <span className="text-xs text-gray-600">Nanded</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#0860b1] transition duration-300"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 mt-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0860b1] transition"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/student-portal"
              className="bg-[#0860b1] text-white px-4 py-2 rounded-md hover:bg-[#064481] transition"
            >
              Student Portal
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-md shadow-md py-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <button
                  className="flex items-center justify-between w-full py-2 px-4 text-gray-700 hover:text-[#0860b1] hover:bg-gray-100"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.name ? null : item.name
                    )
                  }
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      } transition-transform`}
                    />
                  )}
                </button>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block py-2 text-sm text-gray-600 hover:text-[#0860b1] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/student-portal"
              className="block py-2 text-[#0860b1] font-semibold px-4"
              onClick={() => setIsOpen(false)}
            >
              Student Portal
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
