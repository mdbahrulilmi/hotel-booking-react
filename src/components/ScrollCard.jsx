import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ScrollCard({Content})
{
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
  return(
<>
            <div className="relative">

              <div
                ref={scrollRef}
                className="flex overflow-hidden gap-2 scroll-smooth scrollbar-hide"
              >
                    {Content}
              </div>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-2 bg-white text-green-500 p-2 rounded-full shadow"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-1 bg-white text-green-500git p-2 rounded-full shadow"
              >
                <ChevronRight />
              </button>
            </div>
    </>
  )
}

export default ScrollCard;