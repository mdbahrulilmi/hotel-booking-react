import { MdOutlineContentCopy } from "react-icons/md";

const couponList = [
    {label : 'Diskon 8% Hotel', condition : 'min. transaksi Rp 500rb', code : 'JALANYUK'},
    {label : 'Diskon 8% Xperience', condition : 'min. transaksi Rp 300rb', code : 'JALANYUK'},
    {label : 'Diskon 12% Antar Jemput Bandara', condition : 'min. transaksi Rp 150rb', code : 'JALANYUK'},
    {label : 'Diskon 10% Rental Mobil', condition : 'min. transaksi Rp 500rb', code : 'JALANYUK'},
]

function CouponCard()
{
    return (
        couponList.map((item) =>
        (
            <div className="relative w-[280px] shrink-0 py-3 px-5 overflow-hidden bg-white">
                                    <div className="absolute -left-3 top-3/5 -translate-y-1/2 w-6 h-6 rounded-full z-1 shadow-inner" style={{backgroundColor:' #f7f7f7'}}></div>
                                    <div className="absolute -right-3 top-3/5 -translate-y-1/2 w-6 h-6 rounded-full z-1 shadow-inner" style={{backgroundColor:' #f7f7f7'}}></div>
                                    <h5 className="text-sm font-semibold">{item.label}</h5>
                                    <p className="mb-8 text-[12px] font-semibold text-gray-700">{item.condition}</p>
                                    <div className="left-3 top-3/5 -translate-y-1/2 border border-dashed border-gray-200    "></div>
                                    <div className="flex mt-3 justify-between">
                                        <div className="flex px-3 gap-2 items-center" style={{backgroundColor:'rgb(231, 231, 231)'}}>
                                        <MdOutlineContentCopy />
                                        <h5 className="font-mono font-bold">{item.code}</h5>
                                        </div>
                                        <button className="hover:cursor-pointer rounded-xl bg-green-200 px-3 py-1 text-green-800">Copy</button>
            
                                    </div>
                                    </div>
                )
        )
    )
}


export default CouponCard;