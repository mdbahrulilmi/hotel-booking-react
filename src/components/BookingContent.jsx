import { Calendar, MapPin, Star, CheckCircle, XCircle, Clock, AlertCircle, Search } from 'lucide-react';

const getStatusInfo = (status) => {
  switch (status) {
    case 'completed':
      return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', text: 'Selesai' };
    case 'confirmed':
      return { icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-100', text: 'Dikonfirmasi' };
    case 'cancelled':
      return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100', text: 'Dibatalkan' };
    case 'upcoming':
      return { icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100', text: 'Akan Datang' };
    default:
      return { icon: AlertCircle, color: 'text-gray-600', bg: 'bg-gray-100', text: 'Unknown' };
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const BookingContent = ({ bookings }) => {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Search className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada booking ditemukan</h3>
        <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter Anda</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {bookings.map((booking) => {
        const statusInfo = getStatusInfo(booking.status);
        const StatusIcon = statusInfo.icon;

        return (
          <div key={booking.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-64 h-48 lg:h-auto">
                <img src={booking.image} alt={booking.hotelName} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{booking.hotelName}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {booking.location}
                        </div>
                      </div>
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`}>
                        <StatusIcon className="h-4 w-4 mr-1" />
                        {statusInfo.text}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">Check-in:</span>
                          <span className="ml-1">{formatDate(booking.checkIn)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">Check-out:</span>
                          <span className="ml-1">{formatDate(booking.checkOut)}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Tipe Kamar:</span> {booking.roomType}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Durasi:</span> {booking.nights} malam
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Tamu:</span> {booking.guests} orang, {booking.rooms} kamar
                        </div>
                      </div>
                    </div>

                    {booking.rating && (
                      <div className="flex items-center mb-3">
                        <span className="text-sm text-gray-600 mr-2">Rating Anda:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < booking.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500 mb-2 sm:mb-0">
                        Booking ID: <span className="font-medium">{booking.id}</span> • Dipesan: {formatDate(booking.bookingDate)}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {formatCurrency(booking.totalPrice)}
                        </div>
                        <div className="text-sm text-gray-500">Total harga</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingContent;
