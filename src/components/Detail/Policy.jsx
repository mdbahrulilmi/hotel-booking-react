import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Info } from 'lucide-react';

function Policy({ id }) {
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "Fasilitas apa saja yang tersedia di Swiss-Belinn Airport Muscat?",
            answer: "Hotel ini menyediakan berbagai fasilitas termasuk restoran, resepsionis 24 jam, WiFi, lift, area bebas asap rokok, brankas, kafe, dan layanan laundry."
        },
        {
            question: "Berapa kisaran harga kamar untuk menginap di Swiss-Belinn Airport Muscat?",
            answer: "Harga kamar bervariasi tergantung pada jenis kamar dan tanggal menginap. Silakan cek ketersediaan untuk mendapatkan harga terkini."
        },
        {
            question: "Kapan waktu check-in & check-out di Swiss-Belinn Airport Muscat?",
            answer: "Check-in dimulai dari pukul 14:00 dan check-out sebelum pukul 12:00."
        },
        {
            question: "Apakah Swiss-Belinn Airport Muscat menyediakan sarapan?",
            answer: "Ya, hotel menyediakan sarapan buffet dengan biaya tambahan sekitar OMR 6 untuk dewasa dan OMR 6 untuk anak-anak."
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Main Policy Section */}
            <div className="bg-green-100 rounded-lg p-6 mb-6">
                <h1 className="text-xl font-bold text-gray-800 mb-4">
                    Kebijakan Akomodasi & Informasi Umum di Swiss-Belinn Airport Muscat
                </h1>
                
                {/* Important Notes */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                    <div className="flex items-start">
                        <Info className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div>
                            <p className="text-green-800 font-medium mb-2">Catatan Penting</p>
                            <ul className="text-green-700 text-sm space-y-1">
                                <li>• Fee for buffet breakfast: approximately OMR 6 for adults and OMR 6 for children</li>
                                <li>• Airport shuttle fee: OMR 10 per room (one-way)</li>
                            </ul>
                            <a href="#" className="text-green-600 underline text-sm mt-2 inline-block">
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>

                {/* Check-in/Check-out Times */}
                <div className="flex items-center mb-4">
                    <Clock className="text-gray-600 mr-3" size={20} />
                    <div>
                        <p className="font-semibold text-gray-800">Waktu Check-in/Check-out</p>
                        <p className="text-gray-600">
                            Check-in: <span className="font-medium">Dari 14:00</span> | 
                            Check-out: <span className="font-medium">Sebelum 12:00</span>
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">Hotel policy is not yet available.</p>

                {/* General Information */}
                <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Informasi Umum</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Fasilitas Populer</p>
                            <p className="text-gray-600">Restoran, Resepsionis 24 Jam, WiFi, Lift</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Waktu Check-In/Check-Out</p>
                            <p className="text-gray-600">Dari 14:00 - Sebelum 12:00</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Ketersediaan Sarapan</p>
                            <p className="text-gray-600">Ya, beberapa ruangan menyediakan sarapan.</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Kamar yang tersedia di Swiss-Belinn Airport Muscat</p>
                            <p className="text-gray-600">128</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Fasilitas lainnya di Swiss-Belinn Airport Muscat</p>
                            <p className="text-gray-600">OTHER, Area bebas asap rokok, Brankas, Kafe, Laundry</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 mb-1">Terdekat dari Hotel</p>
                            <p className="text-gray-600">Masjid Agung Sultan Qaboos, Oman International Hospital, Bandar Udara Internasional Muscat (MCT)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <div className="bg-green-100 rounded-full p-3 mr-4">
                            <div className="relative">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg font-bold">?</span>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">?</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Pertanyaan yang sering ditanyakan di Swiss-Belinn Airport Muscat
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                                    {expandedFAQ === index ? (
                                        <ChevronUp className="text-green-500 flex-shrink-0" size={20} />
                                    ) : (
                                        <ChevronDown className="text-green-500 flex-shrink-0" size={20} />
                                    )}
                                </button>
                                {expandedFAQ === index && (
                                    <div className="px-4 pb-4 border-t border-gray-100">
                                        <p className="text-gray-600 pt-3">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policy;