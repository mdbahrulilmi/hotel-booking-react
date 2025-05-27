function Support () {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Customer Support</h1>
      <p className="text-center text-gray-600">
        We're here to help you with your hotel bookings. Contact us anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center shadow-sm rounded-xl p-4 bg-white">
          <div className="mx-auto mb-2 text-blue-500">📧</div>
          <h2 className="text-lg font-semibold">Email Us</h2>
          <p className="text-gray-600">support@hotelbooking.com</p>
        </div>

        <div className="text-center shadow-sm rounded-xl p-4 bg-white">
          <div className="mx-auto mb-2 text-green-500">📞</div>
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p className="text-gray-600">+1 (800) 123-4567</p>
        </div>

        <div className="text-center shadow-sm rounded-xl p-4 bg-white">
          <div className="mx-auto mb-2 text-purple-500">❓</div>
          <h2 className="text-lg font-semibold">FAQs</h2>
          <p className="text-gray-600">Find quick answers to common questions.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Send Us a Message</h2>
        <form className="space-y-4">
          <input className="w-full border border-gray-200 p-2 rounded" placeholder="Your Name" required />
          <input className="w-full border border-gray-200 p-2 rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full border border-gray-200 p-2 rounded" placeholder="Your Message" rows={5} required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
