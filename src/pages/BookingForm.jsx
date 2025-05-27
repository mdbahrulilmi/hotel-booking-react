import { useState } from 'react';
import { CalendarIcon, Users, BedDouble, MapPin } from 'lucide-react';

const BookingForm = () => {
  const [form, setForm] = useState({
    hotelName: '',
    location: '',
    roomType: 'Standard',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
  });

  const roomPrices = {
    Standard: 500000,
    Deluxe: 750000,
    Suite: 1200000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'guests' || name === 'rooms' ? parseInt(value) : value,
    }));
  };

  const getNightCount = () => {
    if (!form.checkIn || !form.checkOut) return 0;
    const inDate = new Date(form.checkIn);
    const outDate = new Date(form.checkOut);
    const diffTime = outDate - inDate;
    return Math.max(diffTime / (1000 * 60 * 60 * 24), 0);
  };

  const totalPrice = getNightCount() * form.rooms * roomPrices[form.roomType];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    alert('Booking berhasil dikirim!');
  };
  const formSubmit = (index) => {
    window.location.href = `/bookings`;
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">Form Booking Hotel</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Nama Hotel</label>
        <input
          type="text"
          name="hotelName"
          value={form.hotelName}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Lokasi</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full pl-10 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Tipe Kamar</label>
        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Standard">Standard - Rp 500.000</option>
          <option value="Deluxe">Deluxe - Rp 750.000</option>
          <option value="Suite">Suite - Rp 1.200.000</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Check-in</label>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="w-full pl-10 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Check-out</label>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="w-full pl-10 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Jumlah Tamu</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="number"
              name="guests"
              min={1}
              value={form.guests}
              onChange={handleChange}
              className="w-full pl-10 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Jumlah Kamar</label>
          <div className="relative">
            <BedDouble className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="number"
              name="rooms"
              min={1}
              value={form.rooms}
              onChange={handleChange}
              className="w-full pl-10 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="text-right mt-4">
        <div className="text-lg font-semibold text-gray-800 mb-2">
          Total Harga:{" "}
          <span className="text-blue-600">
            {totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition" onClick={()=>formSubmit()}
        >
          Booking Sekarang
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
