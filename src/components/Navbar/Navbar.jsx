import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, ShoppingBag, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/Products" },
  { name: "Inputs", href: "/" },
  { name: "Forms", href: "/" },
  // { name: "", href: "/" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 10) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all backdrop-blur-md shadow-xs duration-300",
        isScrolled ? "fixed py-3 bg-background/80 backdrop-blur-md " : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold flex items-center" href="#home">
          <span className="relative z-10 flex gap-2">
            <ShoppingBag />
            <span className="text-foreground"> Tiaz</span>
          </span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <Link to="/Login">Sign In</Link>
          <Link to="/Login">Log In</Link>
        </div>

        {/* mobile Navbar */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
