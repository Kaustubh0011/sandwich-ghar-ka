"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav",
    text: "Fresh sandwiches with amazing taste. Definitely ordering again!",
  },
  {
    name: "Priya",
    text: "Very hygienic and delicious. The homemade chutney is fantastic.",
  },
  {
    name: "Rahul",
    text: "Fast delivery and premium quality. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-black">
            Customer <span className="text-orange-500">Reviews</span>
          </h2>

          <p className="text-center mt-4 text-gray-600">
            Loved by our happy customers ❤️
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                "{review.text}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {review.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}