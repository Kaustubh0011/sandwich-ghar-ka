"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
      <div className="w-full max-w-6xl px-5 sm:px-8">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <span className="inline-block rounded-full border border-orange-200 bg-white/80 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-orange-600 backdrop-blur-xl shadow-lg">
            🥪 Fresh • Homemade • Hygienic
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight"
        >
          Sandwich
          <span className="text-orange-500"> Ghar Ka</span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700"
        >
          Every sandwich is freshly prepared after your order using premium
          vegetables, homemade green chutney, fresh bread and quality
          ingredients. Experience the real taste of homemade food.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row pointer-events-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 md:px-10 md:py-4 text-center text-base md:text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-orange-400/50"
          >
            🍽 Explore Menu
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto rounded-full border-2 border-orange-500 bg-white/70 px-8 py-3 md:px-10 md:py-4 text-center text-base md:text-lg font-bold text-orange-500 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-orange-500 hover:text-white"
          >
            ❤️ About Founder
          </a>
        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
        >
          <div className="rounded-3xl bg-white/70 p-5 md:p-6 text-center backdrop-blur-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-black text-orange-500">
              500+
            </h2>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-600">
              Happy Customers
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 p-5 md:p-6 text-center backdrop-blur-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-black text-orange-500">
              100%
            </h2>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-600">
              Homemade Food
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 p-5 md:p-6 text-center backdrop-blur-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-black text-orange-500">
              ★★★★★
            </h2>
            <p className="mt-2 text-sm md:text-base font-medium text-gray-600">
              Premium Quality
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}