import { BsGiftFill } from "react-icons/bs";
import CouponCard from "../components/Card/CouponCard";
import SearchOption from "../components/SearchOption";

import ArticleCard from "../components/Card/ArticleCard";
import ScrollCard from "../components/ScrollCard";
import HotelCard from "../components/Card/HotelCard";

function HomePage() {
  

  return (
    <>
      {/* Header background */}
      <div className="bg-gradient-to-t from-green-700 to-green-500 h-[300px]"></div>

      <div className="w-full flex flex-col items-center justify-center mt-[-60px]">
        <div className="w-[900px] mb-10">
          {/* Search Option */}
          <SearchOption />

          {/* Kupon Section */}
          <div className="mb-10">
            <div className="flex gap-4 items-center mb-3 text-gray-700">
              <BsGiftFill className="text-2xl" />
              <h1 className="text-2xl font-bold">Kupon Pengguna Baru</h1>
            </div>
            <p className="font-semibold text-gray-700 mb-3">
              Berlaku Untuk Transaksi Pertama di Hotel Booking
            </p>
            <ScrollCard Content={<CouponCard/>}/>
          </div>
            
          {/* Article Section */}
          <div className="my-10">
            <div className="flex gap-4 items-center mb-5 text-gray-700">
              <BsGiftFill className="text-2xl" />
              <h1 className="text-2xl font-bold">Baca dan bangkitkan semangat liburanmu</h1>
            </div>
            <ScrollCard Content={<ArticleCard/>}/>
          </div>
          <div className="my-5 flex justify-center text-lg">
            <button className="px-3 py-1 bg-gray-100 text-green-500 font-semibold">
            Baca Artikel Inspirasi &gt;
            </button>
          </div>
          {/* Hotel Section */}
          <div className="my-10">
            <div className="text-gray-700">
              <h1 className="text-2xl font-bold mb-2  ">Akomodasi yang paling dicari</h1>
            </div>
            <h1 className="mb-7 text-gray-500 font-semibold">Wujudkan liburan impian dengan menginap di sini</h1>
            <ScrollCard Content={<HotelCard/>}/>
          </div>
        <div className="my-5 flex justify-center text-lg">
            <button className="px-3 py-1 bg-gray-100 text-green-500 font-semibold">
            Cari Hotel Lainnya &gt;
            </button>
          </div>
          <div className="my-10 p-5 rounded-xl">

        <h1 className="font-bold text-xl text-center mb-4">Mengapa Hotel Booking</h1>
        <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
  <div>
    <div class="mx-auto mb-4 w-16 h-16 text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 7v13h18V7M12 3v4" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold mb-2">Beragam Pilihan Akomodasi</h3>
    <p class="text-sm text-gray-600">Pilihan hotel, villa, resort, apartemen, glamping, dari budget hingga mewah tersedia untukmu!</p>
  </div>

  <div>
    <div class="mx-auto mb-4 w-16 h-16 text-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold mb-2">Berbagai Cara Bayar Fleksibel dan Mudah</h3>
    <p class="text-sm text-gray-600">Kemudahan bertransaksi dengan Pay at Hotel, makin hemat dengan PayLater.</p>
  </div>
  <div>
    <div class="mx-auto mb-4 w-16 h-16 text-indigo-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold mb-2">Program Loyalitas Pelanggan</h3>
    <p class="text-sm text-gray-600">Dapatkan manfaat dan layanan istimewa dengan naik level di program prioritas kami.</p>
  </div>
  <div>
    <div class="mx-auto mb-4 w-16 h-16 text-green-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11zM8 16s-1 2 4 2 4-2 4-2" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold mb-2">Semakin Nyaman dengan Protokol Kesehatan</h3>
    <p class="text-sm text-gray-600">Implementasi protokol kesehatan sesuai standar pemerintah.</p>
  </div>

  <div>
    <div class="mx-auto mb-4 w-16 h-16 text-yellow-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 mx-auto">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5 3 1-6-4-4 6-1 3-5 3 5 6 1-4 4 1 6-5-3z" />
      </svg>
    </div>
    <h3 class="text-lg font-semibold mb-2">Review Tamu Asli</h3>
    <p class="text-sm text-gray-600">Jutaan ulasan tamu asli terpercaya yang sudah memesan di platform kami.</p>
  </div>
</div>
        <div className="mt-5 flex justify-center text-lg">
            <button className="px-3 py-1 text-green-500 font-semibold">
              Baca Selengkapnya &gt;
            </button>
          </div>
          </div>
          <div className="my-10 p-5 rounded-xl">

        <h1 className="font-bold text-xl text-center mb-4">Booking Hotel Online, Harga Murah & Banyak Promo Hanya di Hotel Booking</h1>
        <p className="text-justify">Sebagai satu platform perjalanan terdepan se-Asia Tenggara, Hotel Booking menyediakan inventori hotel dan berbagai jenis penginapan yang sangat lengkap, mulai dari hotel di dalam negeri maupun luar negeri. Selain memberikan banyak promo hotel, Hotel Booking juga memberikan kemudahan dalam melakukan booking hotel murah secara online termasuk mencari hotel terdekat dan penginapan terdekat dari lokasi Anda. Booking hotel online bisa dilakukan melalui website Hotel Booking atau lewat aplikasi yang bisa diunduh secara gratis di PlayStore dan AppStore. </p>
        <div className="mt-5 flex justify-center text-lg">
            <button className="px-3 py-1 text-green-500 font-semibold">
              Baca Selengkapnya &gt;
            </button>
          </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default HomePage;
