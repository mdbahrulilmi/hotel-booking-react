function RoomCard() {
  return (
    <div className="relative pt-2 px-5 overflow-hidden z-0 shadow-sm pb-5 mb-3">
        <div className="absolute bg-green-100 h-[250px] w-[250px] rounded-[250px] left-0 -translate-x-1/2 -translate-y-1/10 z-0"></div>
      <h1 className="text-lg font-bold px-5 relative z-10">Room Name</h1>
      <div className="flex h-[250px] py-5 relative z-10">
        <div className="w-1/4 px-3">
          <img
            src="/assets/images/hotel4.jpeg"
            alt="image"
            className="h-[210px] w-full object-cover rounded"
          />
        </div>
        <div className="w-3/4">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr className="divide-x divide-gray-300">
                <th className="px-3 py-2 w-[250px] text-left">Pilihan Kamar</th>
                <th className="px-3 py-2 w-[100px] text-center">Tamu</th>
                <th className="px-3 py-2 w-[150px] text-end">Harga/kamar/malam</th>
                <th className="px-3 py-2 w-[100px]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="divide-x divide-gray-300 h-[100px]">
                <td className="px-3 py-2 text-left align-top font-semibold">Tidak termasuk sarapan</td>
                <td className="px-3 py-2 text-center align-top">👤👤</td>
                <td className="px-3 py-2 text-green-600 font-semibold text-[18px] text-end">Rp 123.123</td>
                <td className="px-3 py-2 text-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Pilih
                  </button>
                </td>
              </tr>
              <tr className="divide-x divide-gray-300 h-[100px]">
                <td className="px-3 py-2 text-left align-top font-semibold">Termasuk sarapan</td>
                <td className="px-3 py-2 text-center align-top">👤👤</td>
                <td className="px-3 py-2 text-green-600 font-semibold text-[18px] text-end">Rp 123.123</td>
                <td className="px-3 py-2 text-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Pilih
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
 

export default RoomCard;