"use client";

import Image from "next/image";

interface Props {
  item: any;
  open: boolean;
  onClose: () => void;
}

export default function FoodModal({
  item,
  open,
  onClose,
}: Props) {
  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden"
      >
        <div className="relative h-72">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            {item.name}
          </h2>

          <p className="mt-4 text-gray-600">
            {item.description}
          </p>

          <div className="mt-6 flex justify-between items-center">

            <span className="text-3xl font-bold text-orange-500">
              ₹{item.price}
            </span>

            <span className="bg-yellow-100 px-4 py-2 rounded-full">
              ⭐ 4.9
            </span>

          </div>

          <button
            onClick={() => window.open(item.zomatoLink)}
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold"
          >
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}