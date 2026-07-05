"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-100 min-h-screen flex items-center">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-300/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-300/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
              Homemade • Fresh • Hygienic
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

              Fresh

              <span className="text-orange-500">
                {" "}Sandwiches
              </span>

              <br />

              Made With ❤️

            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">

              Every sandwich is freshly prepared after your order using
              premium vegetables, homemade chutney, fresh bread and
              quality ingredients.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full font-semibold">

                Order Now

              </button>

              <button className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition text-orange-500 px-8 py-4 rounded-full font-semibold">

                Explore Menu

              </button>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>

                <h2 className="text-3xl font-bold text-orange-500">

                  500+

                </h2>

                <p className="text-gray-600">

                  Happy Customers

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-orange-500">

                  100%

                </h2>

                <p className="text-gray-600">

                  Fresh Food

                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-orange-500">

                  5★

                </h2>

                <p className="text-gray-600">

                  Rating

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-300/30 blur-3xl"></div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >

              

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}