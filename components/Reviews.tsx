"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Kanan Patel",
    food: "Aloo Slice Cheese Sandwich",
    review:
      "The food was worth it. the amount of cheese it had was perfect for someone like me who likes cheese.",
    rating: 5,
    helpful: 24,
    time: "09 Jul, 09:32 AM",
  },
  {
    name: "Saniya",
    food: "Veg Cheese grilled Sandwich",
    review:
      "Very tasty sandwich. Fresh ingredients aur perfect taste. Zarur fir oeder karungi.",
    rating: 5,
    helpful: 18,
    time: "10 Jul, 08:27 AM",
  },
  {
    name: "Dipali Watkare",
    food: "Aloo Paratha",
    review:
      "Excellent quality and quick delivery. Highly recommended.",
    rating: 5,
    helpful: 15,
    time: "10 Jul, 05:09 PM",
  },
  {
    name: "Ashish Pednekar",
    food: "(2X)Aloo Paratha",
    review:
      "Homemade taste just like home. Soft parathas and delicious curd.",
    rating: 5,
    helpful: 20,
    time: "10Jul, 11:08 PM",
  },
  {
    name: "",
    food: "KitKat Milkshake",
    review:
      "Creamy, thick and perfectly chilled. My favourite drink.",
    rating: 5,
    helpful: 13,
    time: "Yesterday",
  },
  {
    name: "Rohan D.",
    food: "Veg Grilled Sandwich",
    review:
      "Beautiful presentation and excellent taste. Worth every rupee.",
    rating: 5,
    helpful: 17,
    time: "Today",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

            ⭐ What Our 

            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">

              Customers Say

            </span>

          </h2>

          <p className="text-center text-gray-600 mt-5">
            Trusted by hundreds of happy customers.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              transition={{delay:index*0.1}}

              className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"

            >

              <div className="flex justify-between">

                <div className="text-yellow-500 text-xl">

                  ⭐⭐⭐⭐⭐

                </div>

                <span className="text-sm text-gray-400">

                  {review.time}

                </span>

              </div>

              <p className="mt-6 text-gray-700 text-lg leading-8">

                "{review.review}"

              </p>

              <div className="mt-8">

                <h3 className="font-bold text-lg">

                  {review.name}

                </h3>

                <p className="text-green-600 font-medium">

                  ✔ Verified Customer

                </p>

                <p className="text-gray-500 text-sm mt-1">

                  Ordered: {review.food}

                </p>

              </div>

              <div className="mt-6 flex justify-between text-sm">

                <span>

                  ❤️ {review.helpful} Helpful

                </span>

                <span className="font-semibold text-green-600">

                  Recommend ✔

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}