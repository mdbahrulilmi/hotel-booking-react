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
            <div className="rounded-lg w-full h-[200px] overflow-hidden bg-white flex my-5 hover:shadow-sm hover:shadow-blue-300 hover:cursor-pointer">
                <img src={item.image} className="h-[200px] w-[300px] shrink-0" alt="" />
                <div className="flex justify-between w-full">

                <div className="px-4 py-3 w-4/6 shrink-0">
                <p className="text-[20px] font-bold text-gray-800 leading-tight">{item.title}</p>
                {Array.from({length:item.stars}, (_, i) => (
                    <span className="text-[11px]" key={i}>⭐</span>
                ))}
                <p className="text-[18px] font-bold text-blue-400">{item.ratings}</p>
                </div>
                <div className="flex items-end w-4/5 justify-end">
                <div className="p-3 text-end">
                <p className="text-[24px] font-bold text-green-700">{item.price}</p>
                <p className="text-[12px] font-bold text-gray-500 mb-4">Sisa 1 kamar di harga ini</p>
                <button onClick={()=>detailClick(index)} className="bg-orange-600 px-4 py-1.5 rounded-lg text-white font-bold text-[15px] hover:cursor-pointer hover:bg-orange-700">Pilih Kamar</button>
                </div>

                </div>
                </div>
            </div>
        ))
    );
}

export default HotelCardRectangle;