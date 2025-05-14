import ImageCard from "../components/ImageCard";
import { MdLocationOn, MdOutlineDateRange, MdPeople, MdOutlineSearch } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

function HomePage()
{
    const imageUrl = "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484723796.jpg?k=02fb9464da52b3628767c269df6934c2e939bd3e88b8003adc7d887ea2277a55&o=&hp=1";
    const numbers = Array.from({ length: 30 }, (_, i) => i + 1);
    return(
        <> 
            <div className="bg-linear-to-t from-green-700 to-green-500 h-[300px]"></div>
            <div className="w-full flex flex-col items-center justify-center mt-[-60px]">
            <div className="bg-white px-5 py-3 w-[900px] shadow-md rounded-xl">
            <p className="text-green-600 font-semibold text-[15px] mb-8">Search Your Dream Hotel</p>
            <div className="flex flex-col">
                <div className="flex flex-col mb-5">
                    <p className="mb-1">
                        Kota, tujuan, atau nama hotel
                    </p>
                    <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                        <MdLocationOn className="text-green-600 text-2xl mx-1"/>
                        <input className="w-full h-8 text-lg focus:outline-none" type="text" name="" id="" placeholder="Semarang" />
                    </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                    <div className="flex flex-col mb-5 flex-1">
                    <p className="mb-1">
                        Check-in
                    </p>
                    <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                        <MdOutlineDateRange className="text-green-600 text-2xl mx-1"/>
                        <input className="w-full h-8 text-lg focus:outline-none" type="text" name="" id="" placeholder="Jum, 16 Mei 2025" />
                    </div>
                    </div>
                    <div className="flex flex-col mb-5 flex-1">
                    <p className="mb-1">
                        Duration
                    </p>
                    <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                        <BsMoonStars className="text-green-600 text-2xl mx-1"/>
                        <select name="" id="" className="w-full focus:outline-none h-full text-lg">
                            {numbers.map((num) =>
                            (
                                <option value={`${num} malam`}>{`${num} malam`}</option>
                            ))}
                        </select>
                    </div>
                    </div>
                    <div className="flex flex-col mb-5 w-70">
                    <p className="mb-2">
                        Check-out
                    </p>
                        <p className="w-full h-8 text-lg">17 Mei 2025</p>
                    </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                    <div className="flex flex-col mb-5 flex-2">
                    <p className="mb-1">
                        Tamu dan kamar  
                    </p>
                    <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                        <MdPeople className="text-green-600 text-2xl mx-1"/>
                        <input className="w-full h-8 text-lg focus:outline-none" type="text" name="" id="" placeholder="Sab, 17 Mei 2025" />
                    </div>
                </div>
                    <button className="flex-1 bg-orange-600 text-white h-10 mt-1 rounded-sm flex items-center justify-center gap-2 text-md font-semibold hover:bg-orange-700 hover:cursor-pointer"> <MdOutlineSearch className="text-2xl"/>Cari Hotel</button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default HomePage;