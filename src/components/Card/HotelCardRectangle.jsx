const hotelList = [
    {
        image : 'https://picsum.photos/820/600',
        title : 'MG Suites Hotel Semarang', 
        stars : 4,
        ratings : '8,3/10',
        price : 'Rp 412.234'
    },
    {
        image : 'https://picsum.photos/730/600',
        title : 'favehotel Simpang Lima - Semarang', 
        stars : 3,
        ratings : '8,3/10',
        price : 'Rp 412.234'
    },
    {
        image : 'https://picsum.photos/850/700',
        title : 'Hotel Citradream Semarang', 
        stars : 2,
        ratings : '8,3/10',
        price : 'Rp 412.234'
    },
    {
        image : 'https://picsum.photos/840/200',
        title : 'Quest Hotel Simpang Lima - Semarang by ASTON', 
        stars : 4,
        ratings : '8,3/10',
        price : 'Rp 412.234'
    },
]

function HotelCardRectangle()
{
    const detailClick = (index) => {
    window.location.href = `/detail/${index}`;
    };

    return(
        hotelList.map((item, index) =>
            (
            <div className="my-3 rounded-xl w-full bg-white shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
                <div className="flex h-[220px]">

                <img src={`/assets/images/hotel${index + 1}.jpeg`} className="w-[320px] h-full object-cover shrink-0" alt="" />
                <div className="flex justify-between w-full">

                <div className="px-6 py-5 w-4/6 shrink-0 space-y-3">
                <p className="text-xl font-bold text-gray-900 leading-relaxed">{item.title}</p>
                <div className="flex">
                    {Array.from({length:item.stars}, (_, i) => (
                        <span className="text-yellow-400" key={i}>⭐</span>
                    ))}
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-lg inline-block">
                    <p className="text-sm font-semibold text-blue-800">{item.ratings}</p>
                </div>
                </div>
                <div className="flex items-end w-4/5 justify-end p-6">
                <div className="text-end space-y-2">
                <p className="text-2xl font-bold text-emerald-600">{item.price}</p>
                <p className="text-xs font-bold text-gray-500 mb-4">Sisa 1 kamar di harga ini</p>
                <button onClick={()=>detailClick(index)} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">Pilih Kamar</button>
                </div>

                </div>
                </div>
            
            </div>
            </div>
        ))
    );
}

export default HotelCardRectangle;