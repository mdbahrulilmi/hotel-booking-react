function GoogleMapEmbed() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2515489975353!2d110.41732517460007!3d-6.979616868346671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b53f691dd1d%3A0xe34a766edd739108!2sMG%20SUITES!5e0!3m2!1sid!2sid!4v1748156704622!5m2!1sid!2sid"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 rounded-lg"
      ></iframe>
    </div>
  );
}


export default GoogleMapEmbed;