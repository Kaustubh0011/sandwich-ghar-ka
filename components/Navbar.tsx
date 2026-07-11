"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-4 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-emerald-100 bg-white/80 backdrop-blur-2xl px-5 py-3 shadow-[0_10px_40px_rgba(255,140,0,0.15)]"
        >

          {/* Logo */}

          <a
            href="#"
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo/sandwich ghar ka logo.png"
              alt="Sandwich Ghar Ka"
              width={60}
              height={60}
              priority
              className="object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-emerald-700">
                Sandwich Ghar Ka
              </h1>

              <p className="hidden md:block text-xs text-gray-500">
                Homemade • Fresh • Hygienic
              </p>
            </div>
          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative text-gray-700 font-medium transition duration-300 hover:text-emerald-600"
                >
                  {link.name}
s
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-600 transition-colors duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#menu"
            className="hidden lg:flex rounded-full bg-gradient-to-r from-emerald-500 to-red-500 px-7 py-3 font-semibold text-white shadow-lg transition"
          >
            Order Now
          </motion.a>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-full p-2 hover:bg-emerald-700 transition"
            aria-label="Toggle Menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </motion.nav>

        {/* Mobile Menu */}

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mx-4 mt-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-emerald-100 p-6 shadow-2xl lg:hidden"
            >

              <ul className="space-y-5">

                {links.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2 text-lg font-medium text-gray-700 transition hover:bg-emerald-700 hover:text-emerald-600"
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="#menu"
                onClick={() => setOpen(false)}
                className="mt-6 block w-full rounded-full bg-gradient-to-r from-emerald-500 to-red-500 py-3 text-center font-semibold text-white shadow-lg"
              >
                Order Now
              </motion.a>

            </motion.div>

          )}

        </AnimatePresence>

      </header>

      {/* Spacer */}

      <div className="h-28"></div>
    </>
  );
}