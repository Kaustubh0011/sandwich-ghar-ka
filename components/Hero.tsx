"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,#ff7a00_1px,transparent_1px)] [background-size:40px_40px]"></div>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

       <div className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full bg-emerald-300/20 blur-xl"></div>
       <div className="absolute -bottom-52 -right-52 w-[600px] h-[600px] rounded-full bg-yellow-300/20 blur-xl"></div>

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
              className="inline-block rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700 shadow-md"
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
              <span className="
bg-gradient-to-r
from-emerald-500
to-yellow-500
bg-clip-text
text-transparent
"> Sandwiches</span>
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
                className="rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-emerald-700"
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
                className="rounded-full border-2 border-emerald-600 px-8 py-4 font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
              >
                Explore Menu
              </motion.button>

            </motion.div>

            {/* Statistics */}

           {/* Statistics */}

<div className="grid grid-cols-3 gap-8 mt-14">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-emerald-600">
      500+
    </h2>

    <p className="text-gray-600">
      Happy Customers
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-emerald-600">
      100%
    </h2>

    <p className="text-gray-600">
      Fresh Food
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold text-emerald-600">
      5★
    </h2>

    <p className="text-gray-600">
      Rating
    </p>
  </motion.div>

</div>
<div className="mt-10 rounded-3xl border border-green-200 bg-white/80 backdrop-blur-xl p-6 shadow-xl">

  <h3 className="text-xl font-bold text-green-700 mb-4">
    🌿 Freshness Promise
  </h3>

  <div className="space-y-2 text-gray-700">

    <p>✔ Made after every order</p>

    <p>✔ No frozen vegetables</p>

    <p>✔ Hygienically prepared</p>

    <p>✔ Homemade chutney</p>

  </div>

</div>
            </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute w-[450px] h-[450px] rounded-full bg-emerald-200/40 blur-3xl"></div>
            <motion.div
              animate={{
    y: [0, -5, 0],
}}
              transition={{
    duration: 8,
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
                className="w-full h-auto max-w-[650px] drop-shadow-[0_30px_60px_rgba(255,120,0,0.35)] select-none"
              />

            </motion.div>
            {/* Floating Sandwich Icon */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-8 left-10 text-4xl"
>
  🥪
</motion.div>

{/* Floating Tomato */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1,
  }}
  className="absolute top-20 right-10 text-3xl"
>
  🍅
</motion.div>

{/* Floating Cheese */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 2,
  }}
  className="absolute bottom-16 left-6 text-3xl"
>
  🧀
</motion.div>

{/* Floating Lettuce */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 3,
  }}
  className="absolute bottom-10 right-12 text-3xl"
>
  🥬
</motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}