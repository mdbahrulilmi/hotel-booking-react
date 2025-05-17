
import Filter from "../components/Filter";
import SearchOptionFlex from "../components/SearchOptionFlex";
import Sidebar from "../components/Sidebar";

function ExploreHotel()
{
    return(
        <>
        {/* Input Search */}
        <div className="flex justify-center bg-white ">
            <SearchOptionFlex/>
        </div>

        <div className="flex justify-center mt-5">
            <div className="flex w-4/5">
            <Sidebar/>
            <div className="w-4/5">
            <Filter/>
            
            </div>
            </div>

        </div>
        </>
    )
}

export default ExploreHotel;