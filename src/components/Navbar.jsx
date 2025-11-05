import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Tasks", to: "/tasks" },
  ];

  return (
    <nav className="bg-blue-600 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-around py-3">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="py-2 px-3 text-lg font-light text-white hover:text-sky-300 hover:bg-blue-700 transition duration-200 rounded"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
