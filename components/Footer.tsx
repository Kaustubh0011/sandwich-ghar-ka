"use client";

import { Phone, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-emerald-700 to-green-600 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-green-100 mt-3">
          We'd love to hear from you.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* Phone */}

          <a
            href="tel:8879274984"
            className="rounded-3xl bg-white/10 backdrop-blur-md p-6 text-center transition duration-300 hover:bg-white/20 hover:scale-105"
          >
            <Phone className="mx-auto mb-4" size={36} />

            <h3 className="text-xl font-semibold">
              Call Us
            </h3>

            <p className="mt-2 text-green-100">
              8879274984
            </p>
          </a>

          {/* Email */}

          <a
            href="mailto:sandwichgharka@gmail.com"
            className="rounded-3xl bg-white/10 backdrop-blur-md p-6 text-center transition duration-300 hover:bg-white/20 hover:scale-105"
          >
            <Mail className="mx-auto mb-4" size={36} />

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="mt-2 text-green-100 break-all">
              sandwichgharka@gmail.com
            </p>
          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/sandwich_gharka?igsh=MTBueXZmNnFteWJtcw=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-white/10 backdrop-blur-md p-6 text-center transition duration-300 hover:bg-white/20 hover:scale-105"
          >
            <FaInstagram className="mx-auto mb-4 text-4xl" />

            <h3 className="text-xl font-semibold">
              Instagram
            </h3>

            <p className="mt-2 text-green-100">
              @sandwich_gharka
            </p>
          </a>

        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-green-100">
          © {new Date().getFullYear()} Sandwich Ghar Ka. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}