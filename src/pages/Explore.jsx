
import HotelCardRectangle from "../components/Card/HotelCardRectangle";
import Filter from "../components/Filter";
import SearchOptionFlex from "../components/SearchOptionFlex";
import Sidebar from "../components/Sidebar";

function Explore()
{
    return(
        <>
        {/* Input Search */}
        <div className="flex justify-center bg-white sticky top-0 z-10">
            <SearchOptionFlex/>
        </div>

        <div className="flex justify-center mt-5">
            <div className="flex w-4/5">
            <Sidebar/>
            <div className="w-4/5">
            <Filter/>
            <div className="ml-[50px]">
            <HotelCardRectangle />
            </div>
            </div>
            </div>

        </div>
        </>
    )
}

export default Explore;