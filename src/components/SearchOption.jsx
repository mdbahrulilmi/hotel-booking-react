import {
  MdLocationOn,
  MdOutlineDateRange,
  MdPeople,
  MdOutlineSearch,
} from "react-icons/md";

import { BsMoonStars } from "react-icons/bs";

function SearchOption ()
{
    const numbers = Array.from({ length: 30 }, (_, i) => i + 1);
    return(
        <div className="bg-white px-5 py-3 w-full shadow-md rounded-xl mb-15">
                            <p className="text-green-600 font-semibold text-[15px] mb-8">
                            Search Your Dream Hotel
                            </p>
                            <div className="flex flex-col">
                            <div className="flex flex-col mb-5">
                                <p className="mb-1">Kota, tujuan, atau nama hotel</p>
                                <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                <MdLocationOn className="text-green-600 text-2xl mx-1" />
                                <input
                                    className="w-full h-8 text-lg focus:outline-none"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Semarang"
                                />
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 items-center">
                                <div className="flex flex-col mb-5 flex-1">
                                <p className="mb-1">Check-in</p>
                                <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                    <MdOutlineDateRange className="text-green-600 text-2xl mx-1" />
                                    <input
                                    className="w-full h-8 text-lg focus:outline-none"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Jum, 16 Mei 2025"
                                    />
                                </div>
                                </div>
                                <div className="flex flex-col mb-5 flex-1">
                                <p className="mb-1">Duration</p>
                                <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                    <BsMoonStars className="text-green-600 text-2xl mx-1" />
                                    <select
                                    name=""
                                    id=""
                                    className="w-full focus:outline-none h-full text-lg"
                                    >
                                    {numbers.map((num) => (
                                        <option value={`${num} malam`}>{`${num} malam`}</option>
                                    ))}
                                    </select>
                                </div>
                                </div>
                                <div className="flex flex-col mb-5 w-70">
                                <p className="mb-2">Check-out</p>
                                <p className="w-full h-8 text-lg">17 Mei 2025</p>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 items-center">
                                <div className="flex flex-col mb-5 flex-2">
                                <p className="mb-1">Tamu dan kamar</p>
                                <div className="flex w-full border border-gray-200 rounded-sm items-center p-1">
                                    <MdPeople className="text-green-600 text-2xl mx-1" />
                                    <input
                                    className="w-full h-8 text-lg focus:outline-none"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="2 Dewasa, 1 Anak, 1 Kamar"
                                    />
                                </div>
                                </div>
                                <button className="flex-1 bg-orange-600 text-white h-10 mt-1 rounded-sm flex items-center justify-center gap-2 text-md font-semibold hover:bg-orange-700 hover:cursor-pointer">
                                {" "}
                                <MdOutlineSearch className="text-2xl" />
                                Cari Hotel
                                </button>
                            </div>
                            </div>
                        </div>
    )
}

export default SearchOption;