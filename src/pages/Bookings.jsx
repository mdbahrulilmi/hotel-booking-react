import { useState, useMemo } from 'react';
import BookingContent from '../components/BookingContent';
import SearchFilter from '../components/SearchFilter';

function Booking (){
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const bookings = [
    {
      id: 'BK001',
      hotelName: 'Grand Hyatt Jakarta',
      location: 'Jakarta, Indonesia',
      checkIn: '2024-03-15',
      checkOut: '2024-03-18',
      nights: 3,
      rooms: 1,
      guests: 2,
      totalPrice: 2400000,
      status: 'completed',
      rating: 5,
      roomType: 'Deluxe Room',
      bookingDate: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop'
    },
    {
      id: 'BK002',
      hotelName: 'The Ritz-Carlton Bali',
      location: 'Nusa Dua, Bali',
      checkIn: '2024-04-10',
      checkOut: '2024-04-14',
      nights: 4,
      rooms: 2,
      guests: 4,
      totalPrice: 8800000,
      status: 'confirmed',
      rating: null,
      roomType: 'Ocean View Suite',
      bookingDate: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop'
    },
    {
      id: 'BK003',
      hotelName: 'Hotel Indonesia Kempinski',
      location: 'Jakarta, Indonesia',
      checkIn: '2024-02-05',
      checkOut: '2024-02-07',
      nights: 2,
      rooms: 1,
      guests: 1,
      totalPrice: 1600000,
      status: 'cancelled',
      rating: null,
      roomType: 'Executive Room',
      bookingDate: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop'
    },
    {
      id: 'BK004',
      hotelName: 'Alila Villas Uluwatu',
      location: 'Uluwatu, Bali',
      checkIn: '2024-05-20',
      checkOut: '2024-05-25',
      nights: 5,
      rooms: 1,
      guests: 2,
      totalPrice: 15000000,
      status: 'upcoming',
      rating: null,
      roomType: 'Pool Villa',
      bookingDate: '2024-04-01',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop'
    },
    {
      id: 'BK005',
      hotelName: 'Four Seasons Resort Bali',
      location: 'Jimbaran, Bali',
      checkIn: '2024-01-12',
      checkOut: '2024-01-16',
      nights: 4,
      rooms: 1,
      guests: 3,
      totalPrice: 12000000,
      status: 'completed',
      rating: 4,
      roomType: 'Premier Ocean View',
      bookingDate: '2023-12-10',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop'
    }
  ];

  const filteredBookings = useMemo(() => {
    let filtered = bookings.filter((booking) => {
      const matchesSearch =
        booking.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.bookingDate) - new Date(a.bookingDate);
        case 'oldest':
          return new Date(a.bookingDate) - new Date(b.bookingDate);
        case 'price-high':
          return b.totalPrice - a.totalPrice;
        case 'price-low':
          return a.totalPrice - b.totalPrice;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, statusFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <BookingContent bookings={filteredBookings} />
    </div>
  );
};

export default Booking;
