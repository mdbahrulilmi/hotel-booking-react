import HotelCard from "../components/Card/HotelCard";
import HotelCardRectangle from "../components/Card/HotelCardRectangle";
import Filter from "../components/Filter";

function Favorites()
{
    return(
        <>
        <div className="flex justify-center mt-5 min-h-[800px]">    
            <div className="w-1/2">
            <h1 className="text-2xl font-bold text-gray-900 mt-3 text-center">Your Favorites Hotel</h1>
            <p className="text-sm text-gray-900 text-center mb-10   ">Hotel hotel pilihan anda yang telah anda simpan</p>
            <div className=" grid grid-cols-3 gap-4 items-center justify-center">
            <HotelCard />
            </div>
            </div>
        </div>
        </>
    );

}

export default Favorites;