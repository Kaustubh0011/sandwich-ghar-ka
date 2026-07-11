"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918879274984"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      rounded-full
      bg-green-500
      px-6
      py-4
      text-white
      shadow-2xl
      transition
      duration-300
      hover:scale-110
      group
      "
    >
      <span className="font-semibold">

        💬 Order on WhatsApp

      </span>

      <div
        className="
        absolute
        right-full
        mr-3
        top-1/2
        -translate-y-1/2
        rounded-xl
        bg-white
        px-3
        py-2
        text-black
        shadow-xl
        opacity-0
        group-hover:opacity-100
        transition
        whitespace-nowrap
        "
      >
        Need Help?<br />
        Chat with us
      </div>

    </a>
  );
}