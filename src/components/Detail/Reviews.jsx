import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ThumbsUp, Filter, Star } from 'lucide-react';

function Reviews({ id }) {
    const [selectedSort, setSelectedSort] = useState('Terbaru');
    const [selectedFormat, setSelectedFormat] = useState('Dengan Teks');
    const [selectedPreference, setSelectedPreference] = useState('Semua Rating, Bahasa Aplikasi Saat Ini, Se...');
    const [reviewsPerPage, setReviewsPerPage] = useState(20);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showFormatDropdown, setShowFormatDropdown] = useState(false);
    const [showPreferenceDropdown, setShowPreferenceDropdown] = useState(false);

    const ratingCategories = [
        { name: 'Kebersihan', rating: 9.3 },
        { name: 'Kenyamanan Kamar', rating: 9.3 },
        { name: 'Makanan', rating: 8.0 },
        { name: 'Lokasi', rating: 8.6 },
        { name: 'Pelayanan dan Fasilitas', rating: 9.3 }
    ];

    const reviews = [
        {
            id: 1,
            reviewer: 'Retno K.',
            initials: 'RK',
            rating: 9.4,
            daysAgo: 107,
            text: 'Naik taksi dari bandara ke hotel ini. Kamarnya bersih, modern, dan nyaman. Dekat dengan beberapa kafe dan restoran. Keramahan yang luar biasa.',
            helpful: false
        }
    ];

    const getRatingColor = (rating) => {
        if (rating >= 9) return 'bg-blue-500';
        if (rating >= 8) return 'bg-green-500';
        if (rating >= 7) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getRatingWidth = (rating) => {
        return `${(rating / 10) * 100}%`;
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Review dari Tamu Lainnya di Swiss-Belinn Airport Muscat
                </h2>
            </div>

            <div className="mb-6">
                <div className="border-b border-gray-200">
                    <button className="text-green-500 font-medium pb-2 border-b-2 border-green-500">
                        Hotel Bookings (3)
                    </button>
                </div>
            </div>

            {/* Rating Overview */}
            <div className="flex items-start gap-8 mb-8">
                {/* Overall Rating */}
                <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-6 mb-4">
                        <div className="text-4xl font-bold text-green-600 mb-2">9,2</div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Istimewa</h4>
                        <p className="text-gray-600 text-sm">Dari 3 review</p>
                        <p className="text-gray-500 text-xs">
                            Oleh traveler di <span className="text-green-500">traveloka</span>
                        </p>
                    </div>
                </div>

                {/* Rating Categories */}
                <div className="flex-1">
                    <div className="space-y-4">
                        {ratingCategories.map((category, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-32 text-sm text-gray-700 font-medium">
                                    {category.name}
                                </div>
                                <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
                                    <div 
                                        className={`h-2 rounded-full ${getRatingColor(category.rating)}`}
                                        style={{ width: getRatingWidth(category.rating) }}
                                    ></div>
                                </div>
                                <div className="w-8 text-sm font-semibold text-green-600">
                                    {category.rating}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
                {/* Sort Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
                    >
                        <Filter size={16} className="text-gray-500" />
                        <span className="text-sm">Urutkan dari</span>
                        <span className="text-sm font-medium text-green-600">{selectedSort}</span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </button>
                </div>

                {/* Format Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setShowFormatDropdown(!showFormatDropdown)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
                    >
                        <span className="text-sm">Format</span>
                        <span className="text-sm font-medium text-green-600">{selectedFormat}</span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </button>
                </div>

                {/* Preference Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setShowPreferenceDropdown(!showPreferenceDropdown)}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
                    >
                        <span className="text-sm">Preferensi</span>
                        <span className="text-sm font-medium text-green-600 max-w-48 truncate">{selectedPreference}</span>
                        <ChevronDown size={16} className="text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Reviews Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    Review Traveler Swiss-Belinn Airport Muscat
                </h3>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Jumlah review per halaman</span>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setReviewsPerPage(20)}
                            className={`px-3 py-1 rounded text-sm ${reviewsPerPage === 20 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            20
                        </button>
                        <button 
                            onClick={() => setReviewsPerPage(40)}
                            className={`px-3 py-1 rounded text-sm ${reviewsPerPage === 40 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            40
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                            <ChevronLeft size={20} className="text-gray-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                            <ChevronRight size={20} className="text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Ulasan pelanggan</h4>
                
                {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start gap-4">
                            {/* Reviewer Avatar */}
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {review.initials}
                            </div>
                            
                            <div className="flex-1">
                                {/* Reviewer Info */}
                                <div className="flex items-center gap-4 mb-3">
                                    <h5 className="font-semibold text-gray-800">{review.reviewer}</h5>
                                    <div className="flex items-center gap-2">
                                        <Star size={16} className="text-green-500 fill-current" />
                                        <span className="font-semibold text-green-600">{review.rating}</span>
                                        <span className="text-gray-500 text-sm">/10</span>
                                    </div>
                                    <span className="text-gray-500 text-sm">Ditulis {review.daysAgo} minggu lalu</span>
                                </div>
                                
                                {/* Review Text */}
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {review.text}
                                </p>
                                
                                {/* Google Translate Notice */}
                                <p className="text-xs text-gray-400 mb-3">
                                    <span className="text-green-500">Translated by Google</span> <span className="text-green-500 underline cursor-pointer">Lihat deskripsi asli</span>
                                </p>
                                
                                {/* Helpful Button */}
                                <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
                                    <ThumbsUp size={16} />
                                    <span className="text-sm">Apakah review ini membantu?</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;