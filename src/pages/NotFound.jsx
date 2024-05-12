export default function ErrorPage() {
  return (
  <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-700 mt-4">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <a
          href="/"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
