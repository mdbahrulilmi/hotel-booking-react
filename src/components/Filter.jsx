function Filter()
{
    return(
        <div className="flex justify-end gap-4">
                <div className="flex items-center gap-2">
                    <p className="text-[12px]">Urutkan Berdasarkan:</p>
                    <select name="" id="" className="bg-white rounded-2xl p-1">
                        <option value="">Popularitas Tertinggi</option>
                        <option value="">Nilai Ulasan</option>
                        <option value="">Harga Tertinggi</option>
                        <option value="">Harga Terendah</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[12px]">Tampilan Harga:</p>
                    <select name="" id="" className="bg-white rounded-2xl p-1">
                        <option value="">Perkamar permalam</option>
                        <option value="">Total harga</option>
                    </select>
                </div>
            </div>
    )
}

export default Filter;