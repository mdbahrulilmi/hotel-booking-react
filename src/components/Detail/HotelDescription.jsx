import ImageGallery from "../ImageGallery";

function HotelDescription({id})
{
    return(
        <div>
            <ImageGallery />
            <div className="flex justify-between py-5">
                <div className="leading-none">
                    <h1 className="text-[24px] font-bold">MG Suites Hotel Semarang</h1>
                    <span className="text-[11px]">⭐⭐⭐⭐</span>
                </div>
                <div className="flex gap-2">
                    <div className="text-end leading-none">
                        <p className="text-[12px] font-bold text-gray-500">Harga/kamar/malam mulai dari</p>
                        <p className="text-[20px] font-bold text-green-700 ">Rp 123123</p>
                    </div>
                    <button className="bg-orange-600 px-4 py-1.5 rounded-lg text-white font-bold text-[15px] hover:cursor-pointer hover:bg-orange-700">Pilih Kamar</button>
                </div>
            </div>
            <div className="line-clamp-3">
                Pelayanan memuaskan serta fasilitas hotel yang memadai akan membuat Anda nyaman berada di MG Suites Hotel Semarang.
                Pusat kebugaran menjadi salah satu fasilitas yang wajib Anda coba saat menginap di tempat ini.
                Manjakan diri Anda dengan menikmati fasilitas spa yang memberikan harga dan kualitas pelayanan terbaik.
                Resepsionis siap 24 jam untuk melayani proses check-in, check-out dan kebutuhan Anda yang lain. Jangan ragu untuk menghubungi resepsionis, kami siap melayani Anda.
                Terdapat restoran yang menyajikan menu lezat ala MG Suites Hotel Semarang khusus untuk Anda.
                MG Suites Hotel Semarang adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.
                Dengan fasilitas yang memadai, MG Suites Hotel Semarang menjadi pilihan yang tepat untuk menginap.
            </div>
        </div>
    )
}

export default HotelDescription;