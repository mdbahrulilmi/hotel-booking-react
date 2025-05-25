import { MapPin, Landmark, Hospital, Plane } from 'lucide-react';
import GoogleMapEmbed from "../GoogleMapEmbed";

function Location({ id }) {
  return (
    <div>
      <h2 className="text-[20px] font-semibold mb-4">
        Info Lokasi di sekitar MG Suites Hotel Semarang
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* MAP */}
        <div className="w-full lg:w-2/3 h-[400px] rounded-lg overflow-hidden shadow">
          <GoogleMapEmbed />
        </div>

        {/* PLACE INFO */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h3 className="text-lg font-semibold">Di Sekitar Properti</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Landmark className="text-green-600 w-5 h-5 mt-1" />
              <div>
                <div className="font-medium">Lawang Sewu</div>
                <div className="text-gray-600">Tempat Wisata Sejarah – 250 m</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Hospital className="text-red-500 w-5 h-5 mt-1" />
              <div>
                <div className="font-medium">RS Telogorejo</div>
                <div className="text-gray-600">Layanan Publik – 400 m</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Plane className="text-blue-500 w-5 h-5 mt-1" />
              <div>
                <div className="font-medium">Bandara Ahmad Yani</div>
                <div className="text-gray-600">Pusat Transportasi – 6.5 km</div>
              </div>
            </li>
          </ul>

          <p className="text-xs text-gray-500 mt-3">
            * Jarak dihitung berdasarkan garis lurus. Jarak sebenarnya dapat bervariasi.
          </p>

          <button className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700">
            Temukan Tempat Lainnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
