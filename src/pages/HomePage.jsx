import { BsGiftFill } from "react-icons/bs";
import CouponCard from "../components/Card/CouponCard";
import SearchOption from "../components/SearchOption";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HomePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 270;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Header background */}
      <div className="bg-gradient-to-t from-green-700 to-green-500 h-[300px]"></div>

      <div className="w-full flex flex-col items-center justify-center mt-[-60px]">
        <div className="w-[900px] mb-10">
          {/* Search Option */}
          <SearchOption />

          {/* Kupon Section */}
          <div>
            <div className="flex gap-4 items-center mb-3 text-green-700">
              <BsGiftFill className="text-2xl" />
              <h1 className="text-2xl font-bold">Kupon Pengguna Baru</h1>
            </div>
            <p className="font-semibold text-green-600 mb-3">
              Berlaku Untuk Transaksi Pertama di Hotel Booking
            </p>

            {/* Carousel */}
            <div className="relative">

              <div
                ref={scrollRef}
                className="flex overflow-hidden gap-2 scroll-smooth scrollbar-hide"
              >
                    <CouponCard />
              </div>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-green-500 p-2 rounded-full shadow"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-green-500 p-2 rounded-full shadow"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
