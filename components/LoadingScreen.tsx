"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="text-center">

        <img
          src="/logo/sandwich ghar ka logo.png"
          className="w-36 mx-auto animate-pulse"
        />

        <h1 className="mt-6 text-3xl font-black text-orange-500">
          Sandwich Ghar Ka
        </h1>

        <p className="text-gray-500 mt-3">
          Preparing Fresh Experience...
        </p>

      </div>
    </div>
  );
}