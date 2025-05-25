const articleList = [
    {
        image : 'https://picsum.photos/800/600',
        title : 'Wisata Semarang, 10 Destinasi Ini Wajib Banget Dikunjungi Akhir Tahun!', 
        publisher : 'Travel Bestie',
        duration : 'Less than 1 min read'
    },
    {
        image : 'https://picsum.photos/700/600',
        title : '8 Restoran Kelas Dunia di Singapura yang Wajib Kamu Coba,', 
        publisher : 'Travel Bestie',
        duration : 'Less than 1 min read'
    },
    {
        image : 'https://picsum.photos/800/700',
        title : 'Petualangan 5 Wisata di Binjai, Mengungkap Pesona Tersembunyi!', 
        publisher : 'Fachri Rizki',
        duration : 'Less than 1 min read'
    },
    {
        image : 'https://picsum.photos/800/200',
        title : 'Seru-seruan Wisata di Filipina, Ngapain Aja Nih?, Travel Bestie', 
        publisher : 'Travel Bestie',
        duration : 'Less than 1 min read'
    },
]
    


function ArticleCard()
{
    return(
        articleList.map((item, index) =>
        (
            <div className="rounded-lg w-[250px] h-[205px] overflow-hidden bg-white shrink-0">
                <img src={`/assets/images/hotel${index + 1}.jpeg`} className="h-[110px] w-full" alt="" />
                <div className="px-4 py-2">
                <p className="text-[15px] font-semibold text-gray-800">{item.title}</p>
                <p className="text-[11px] font-semibold text-gray-600">{item.publisher}</p>
                <p className="text-[11px] font-semibold text-gray-600">{item.duration}</p>
                </div>
            </div>
        ))
    );
}

export default ArticleCard;