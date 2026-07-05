"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="mx-auto mt-3 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/80 backdrop-blur-xl px-4 py-3 md:px-6 md:py-4 shadow-xl">

          {/* Logo */}

          <a href="#" className="flex items-center gap-3">

            <Image
              src="/logo/sandwich ghar ka logo.png"
              alt="Sandwich Ghar Ka"
              width={56}
              height={56}
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
              priority
            />

            <div>

              <h1 className="text-lg md:text-xl font-bold text-orange-600">
                Sandwich Ghar Ka
              </h1>

              <p className="hidden md:block text-xs text-gray-600">
                Homemade • Fresh • Hygienic
              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8">

            {links.map((link) => (

              <li key={link.name}>

                <a
                  href={link.href}
                  className="font-medium text-gray-700 transition hover:text-orange-500"
                >
                  {link.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Desktop Button */}

          <a
            href="#menu"
            className="hidden lg:flex items-center rounded-full bg-orange-500 px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105"
          >
            Order Now
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </nav>

        {/* Mobile Menu */}

        {open && (

          <div className="mx-4 mt-3 rounded-3xl bg-white p-6 shadow-2xl lg:hidden">

            <ul className="space-y-5">

              {links.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg font-medium text-gray-700 hover:text-orange-500"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-6 block w-full rounded-full bg-orange-500 py-3 text-center text-white font-semibold transition hover:bg-orange-600"
            >
              Order Now
            </a>

          </div>

        )}

      </header>

      {/* Spacer */}

      <div className="h-24"></div>
    </>
  );
}