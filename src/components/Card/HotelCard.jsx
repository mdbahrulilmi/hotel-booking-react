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

function HotelCard()
{
    return(
        hotelList.map((item) =>
        (
            <div className="rounded-lg w-[250px] h-[330px] overflow-hidden bg-white shrink-0">
                <img src={item.image} className="h-[200px] w-full" alt="" />
                <div className="px-4 py-3">
                <p className="text-[15px] font-bold text-gray-800 leading-tight">{item.title}</p>
                {Array.from({length:item.stars}, (_, i) => (
                    <span className="text-[11px]" key={i}>⭐</span>
                    ))}
                <p className="text-[18px] font-bold text-blue-400">{item.ratings}</p>
                <p className="text-[11px] font-bold text-green-700">{item.price}</p>
                </div>
            </div>
        ))
    );
}

export default HotelCard;