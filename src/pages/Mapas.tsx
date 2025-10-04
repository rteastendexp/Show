import React from "react";
import { useState } from "react";
import { Calendar } from "lucide-react";
import BookingModal from "../components/BookingModal";
import RefundPolicyModal from "../components/RefundPolicyModal";
import { useModal } from "../hooks/useModal";

const MAP1 = {
  lat: 16.314216,
  lng: -86.544446,
  zoom: 17
};
const MAP2 = {
  lat: 16.33094,
  lng: -86.494873,
  zoom: 17
};

const MapEmbed = ({ lat, lng, zoom, title }: { lat: number; lng: number; zoom: number; title: string }) => (
  <div className="mb-8">
    <h4 className="font-semibold mb-2">{title}</h4>
    <iframe
      title={title}
      width="100%"
      height="350"
      style={{ border: 0, borderRadius: 8 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.005}%2C${lat-0.005}%2C${lng+0.005}%2C${lat+0.005}&layer=mapnik&marker=${lat}%2C${lng}`}
    ></iframe>
    <div className="text-xs mt-1">
      <a
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View larger map
      </a>
    </div>
  </div>
);

export default function Mapas() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { open: showRefund, openModal: openRefund, closeModal: closeRefund } = useModal();
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-800 drop-shadow">Cruise Ship Meeting Points</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coxen Hole Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col">
          <MapEmbed lat={MAP1.lat} lng={MAP1.lng} zoom={MAP1.zoom} title="Coxen Hole Cruise Port" />
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Coxen Hole Cruise Port</h3>
            <ul className="text-gray-700 text-sm mb-4 list-disc list-inside space-y-1">
              <li>Main port for Royal Caribbean, Norwegian, MSC, and other major cruise lines.</li>
              <li>Meeting point: Just outside the main terminal, past the security gate.</li>
             
              <li>Easy access for most international cruise guests.</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-900 mb-4">
              <span className="font-semibold">Tip:</span> Keep your phone available to receive updates or directions from the guide.
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=16.314216,-86.544446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 text-sm shadow transition"
              style={{ marginTop: 'auto' }}
            >
              View in Google Maps
            </a>
          </div>
        </div>
        {/* Mahogany Bay Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col">
          <MapEmbed lat={MAP2.lat} lng={MAP2.lng} zoom={MAP2.zoom} title="Mahogany Bay" />
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Mahogany Bay</h3>
            <ul className="text-gray-700 text-sm mb-4 list-disc list-inside space-y-1">
              <li>Exclusive port for Carnival Cruise Line and its partners.</li>
              <li>Meeting point: At the end of the shopping village, outside the main gates.</li>
              <li>Enjoy the vibrant shopping village with local crafts, souvenirs, and cafes before your tour begins.</li>
              <li>Allow extra time to walk from the ship to the meeting area (large port complex).</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-900 mb-4">
              <span className="font-semibold">Tip:</span> Wear comfortable shoes for the walk through the port.
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=16.33094,-86.494873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 text-sm shadow transition"
              style={{ marginTop: 'auto' }}
            >
              View in Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-blue-100 rounded-xl p-6 text-center shadow">
        <p className="text-blue-900 text-base font-medium">
          <span className="font-bold">Important:</span> These are the main meeting points for cruise ship excursions. Your exact meeting point and instructions will be confirmed after booking.<br className="hidden md:inline" />
          If you have any questions or need assistance on arrival, please contact us via WhatsApp or phone for immediate help.
        </p>
      </div>

      {/* Book Adventure Button */}
      <div className="flex justify-center mt-10 mb-8">
        <button
          onClick={openRefund}
          className="group bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-teal-400 hover:to-blue-500 flex items-center"
        >
          <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Book Adventure
        </button>
      </div>

      {/* Booking Modal */}
      {/* Refund Policy Modal */}
      {showRefund && (
        <RefundPolicyModal
          open={showRefund}
          onAccept={() => {
            closeRefund();
            setShowBookingModal(true);
          }}
          onReject={closeRefund}
        />
      )}
      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  );
}
