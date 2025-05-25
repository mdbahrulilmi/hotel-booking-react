import {
  Building,
  Hotel,
  Utensils,
  Wifi,
  Dumbbell,
  Users,
  Briefcase,
  ShowerHead,
  Bus,
  Globe2
} from "lucide-react";

const facilityData = [
  {
    title: "Fasilitas Publik",
    icon: <Building className="w-5 h-5" />,
    items: ["OTHER", "Restoran", "Area bebas asap rokok", "Brankas", "Kafe", "Lift"],
  },
  {
    title: "Servis Hotel",
    icon: <Hotel className="w-5 h-5" />,
    items: ["Laundry", "Jasa tur", "Penitipan bagasi", "Resepsionis 24 jam", "Concierge/layanan tamu"],
  },
  {
    title: "Umum",
    icon: <Users className="w-5 h-5" />,
    items: ["Banquet", "Tempat parkir", "Teras"],
  },
  {
    title: "Kegiatan Lainnya",
    icon: <ShowerHead className="w-5 h-5" />,
    items: ["Spa", "Mandi uap"],
  },
  {
    title: "Makanan dan Minuman",
    icon: <Utensils className="w-5 h-5" />,
    items: ["Sarapan"],
  },
  {
    title: "Fasilitas Bisnis",
    icon: <Briefcase className="w-5 h-5" />,
    items: ["Fasilitas rapat", "Fasilitas bisnis"],
  },
  {
    title: "Konektivitas",
    icon: <Wifi className="w-5 h-5" />,
    items: ["WiFi gratis"],
  },
  {
    title: "Olahraga & Rekreasi",
    icon: <Dumbbell className="w-5 h-5" />,
    items: ["Ruangan game", "Pusat kebugaran"],
  },
  {
    title: "Jasa Antar Jemput",
    icon: <Bus className="w-5 h-5" />,
    items: ["Antar-jemput bandara berbiaya"],
  },
];

function Facility({ id }) {
  return (
    <div className="w-full ">
      <h2 className="text-[20px] font-semibold mb-6">
        Semua fasilitas MG Suites Hotel Semarang
      </h2>
    <div className="flex justify-center w-full p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-50 gap-y-6">
                {facilityData.map((group, index) => (
                <div key={index}>
                    <div className="flex items-center gap-2 font-semibold mb-2">
                    <span>{group.icon}</span>
                    <span>{group.title}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                    {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
    </div>
      
    </div>
  );
}

export default Facility;
