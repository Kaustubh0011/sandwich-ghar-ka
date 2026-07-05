"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Home,
  ShieldCheck,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We use fresh vegetables and premium ingredients for every order.",
  },
  {
    icon: Home,
    title: "Homemade Taste",
    description:
      "Prepared with love just like home, using authentic recipes.",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygienic",
    description:
      "Every order is prepared with strict hygiene and food safety standards.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description:
      "Every sandwich is handcrafted after you order.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold"
        >
          Why Choose
          <span className="text-orange-500">
            {" "}Sandwich Ghar Ka?
          </span>
        </motion.h2>

        <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
          Fresh ingredients, homemade taste and premium quality in every bite.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="rounded-3xl bg-white shadow-xl p-8 border border-orange-100"
              >

                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}