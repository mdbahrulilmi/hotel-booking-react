function Sidebar()
{
    return (
        <div className="w-1/5">
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Filter Populer</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Hotel
                    </div>
                    <div>
                    <input type="checkbox" /> Kolam Renang
                    </div>
                    <div>
                    <input type="checkbox" /> Resepsionis
                    </div>
                    <div>
                    <input type="checkbox" /> Restoran
                    </div>
                    <div>
                    <input type="checkbox" /> Bayar Di Hotel
                    </div>

                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Promo & Diskon</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Promo Untuk Anda
                    </div>
                    <div>
                    <input type="checkbox" /> Extra Banefit
                    </div>
                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Bintang</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    {Array.from({length:5}, (_, i) => (
                            <div>
                            <input type="checkbox" /> {i+1} ⭐
                            </div>
                    ))}
                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Rating dari tamu</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Hotel
                    </div>
                    <div>
                    <input type="checkbox" /> Kolam Renang
                    </div>
                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Tipe Akomodasi</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Hotel
                    </div>
                    <div>
                    <input type="checkbox" /> Guest House
                    </div>
                    <div>
                    <input type="checkbox" /> Ryokan
                    </div>
                    <div>
                    <input type="checkbox" /> Apartemen
                    </div>
                    <div>
                    <input type="checkbox" /> Hostel
                    </div>

                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Fasilitas yang sering dicari</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Resepsionis
                    </div>
                    <div>
                    <input type="checkbox" /> Sarapan Tersedia
                    </div>
                    <div>
                    <input type="checkbox" /> Early Check-In
                    </div>
                    <div>
                    <input type="checkbox" /> Antar-jemput Bandara
                    </div>
                    <div>
                    <input type="checkbox" /> Late Check-Out
                    </div>

                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Pembatalan Fleksibel</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Gratis Pembatalan
                    </div>
                    <div>
                    <input type="checkbox" /> Bayar di Hotel
                    </div>
                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Fasilitas Unik</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Bar
                    </div>
                    <div>
                    <input type="checkbox" /> Area Hiburan
                    </div>
                    <div>
                    <input type="checkbox" /> Area Belanja
                    </div>
                    <div>
                    <input type="checkbox" /> Indoor Sports
                    </div>
                    <div>
                    <input type="checkbox" /> Kasino
                    </div>

                </div>

            </div>
            <div className="bg-green-200 rounded-xl mb-4">
                <div className="flex p-2">
                <p className="font-bold">Fasilitas Kamar</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-2 gap-2 flex flex-col">
                    <div>
                    <input type="checkbox" /> Ruang Bebas Asap Rokok
                    </div>
                    <div>
                    <input type="checkbox" /> AC
                    </div>
                    <div>
                    <input type="checkbox" /> Hair Dryer
                    </div>
                    <div>
                    <input type="checkbox" /> Ruang Keluarga
                    </div>
                    <div>
                    <input type="checkbox" /> Kulkas
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sidebar;