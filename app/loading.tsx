export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50">

      <div className="text-7xl animate-bounce">
        🥪
      </div>

      <h1 className="mt-8 text-4xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Sandwich Ghar Ka
      </h1>

      <p className="mt-4 text-gray-600 text-lg animate-pulse">
        Loading...
      </p>

    </div>
  );
}