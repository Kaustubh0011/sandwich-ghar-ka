"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-100 min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full bg-orange-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-52 -right-52 w-[600px] h-[600px] rounded-full bg-yellow-300/20 blur-3xl"
        />

      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-600 shadow-md"
            >
              Homemade • Fresh • Hygienic
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              Fresh
              <span className="text-orange-500"> Sandwiches</span>
              <br />
              Made With ❤️
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
            >
              Every sandwich is freshly prepared after your order using
              premium vegetables, homemade chutney, fresh bread and
              quality ingredients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
              >
                Order Now
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                Explore Menu
              </motion.button>

            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 grid grid-cols-3 gap-8"
            >

              <div>
                <h2 className="text-3xl font-bold text-orange-500">500+</h2>
                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">100%</h2>
                <p className="text-gray-600">Fresh Food</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">5★</h2>
                <p className="text-gray-600">Rating</p>
              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[430px] h-[430px] rounded-full border border-orange-200"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[520px] h-[520px] rounded-full border border-yellow-200"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <Image
                src="/images/hero/hero-sandwich.png"
                alt="Fresh Sandwich"
                width={650}
                height={650}
                priority
                className="drop-shadow-[0_30px_60px_rgba(255,120,0,0.35)] select-none"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}