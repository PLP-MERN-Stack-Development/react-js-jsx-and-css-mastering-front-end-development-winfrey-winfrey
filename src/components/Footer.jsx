import { Link } from "react-router-dom";

export default function Footer({ links = [], className = "" }) {
  return (
    <footer className={`bg-blue-600 text-white py-6 mt-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm hover:text-sky-300 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-3 opacity-50"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-blue-100">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
