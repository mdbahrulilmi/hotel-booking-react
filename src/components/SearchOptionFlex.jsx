import {
  MdLocationOn,
  MdOutlineDateRange,
  MdPeople,
  MdOutlineSearch,
} from "react-icons/md";
function SearchOptionFlex()
{
    return(
        <div className="flex items-center w-4/5 py-5">
            <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                            <MdLocationOn className="text-green-600 text-2xl mx-1" />
                                            <input
                                                className="w-full h-10 text-lg focus:outline-none"
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Semarang"
                                            />
                                            </div>
            <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
            <MdOutlineDateRange className="text-green-600 text-2xl mx-1" />
            <input
            className="w-full h-10 text-lg focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Jum, 16 Mei 2025"
            />
            </div>
            <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                                <MdPeople className="text-green-600 text-2xl mx-1" />
                                                <input
                                                className="w-full h-10 text-lg focus:outline-none"
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="2 Dewasa, 1 Anak, 1 Kamar"
                                                />
                                            </div>
            <button className="w-[300px] bg-green-700 px-2 py-3 text-white">Cari Hotel</button>
            </div>
    )
}

export default SearchOptionFlex;