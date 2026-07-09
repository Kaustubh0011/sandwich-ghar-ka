"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-center text-5xl font-black">
            Meet The <span className="text-orange-500">Co-Founder</span>
          </h2>

          <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
            <strong>A passionate student entrepreneur serving fresh homemade food
            with love, quality and hygiene.</strong>
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="flex justify-center">
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-orange-200 blur-3xl opacity-40"></div>

    <Image
      src="/images/Co-Founder/Co-Founder.png"
      alt="Co-Founder"
      width={350}
      height={350}
      priority
      className="relative rounded-full border-8 border-white shadow-2xl object-cover"
    />
  </div>
</div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
            👑 Co-Founder
            </span>
            
            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
              Student Entrepreneur
            </span>

            <h3 className="text-5xl font-black mt-6">
              Hi, I'm <span className="
bg-gradient-to-r
from-orange-500
to-yellow-500
bg-clip-text
text-transparent
">Jyoti</span>
            </h3>

            <p className="mt-8 text-gray-700 leading-8 text-lg">
              I'm a TYB.Com student at <strong>KES Shroff College, Mumbai.</strong> 
              Along with pursuing my degree, I started
              <strong> Paratha Ghar Ka </strong>
              and
              <strong> Sandwich Ghar Ka </strong>
              with one dream —
              serving fresh homemade food people can trust.
            </p>

            <p className="mt-6 text-gray-700 leading-8 text-lg">
              Before starting this journey, I completed <strong> professional food
              training </strong> to learn proper <strong>hygiene, preparation techniques and
              quality standards.</strong>
            </p>

            <p className="mt-6 text-gray-700 leading-8 texts-lg">
              Every order motivates me to work harder and continue growing.
              Your support means more than just a purchase
              —it helps turn dream into reality.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h4 className="text-3xl font-black text-orange-500">
                  100%
                </h4>
                <p>Fresh Ingredients</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h4 className="text-3xl font-black text-orange-500">
                  ❤️
                </h4>
                <p>Made with Love</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}