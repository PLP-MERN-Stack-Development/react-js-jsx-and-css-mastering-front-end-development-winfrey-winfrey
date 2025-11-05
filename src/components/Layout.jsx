import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Define shared links for Navbar & Footer
  const links = [
    { name: "Home", to: "/" },
    { name: "Tasks", to: "/tasks" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar links={links} />

      {/* Page content */}
      <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">{children}</main>

      {/* Footer */}
      <Footer links={links} />
    </div>
  );
}
