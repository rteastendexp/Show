import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Tour } from "../types";
import { getTours } from "../services/googleSheets";
import BookingModal from "./BookingModal";
import RefundPolicyModal from "./RefundPolicyModal";
import { useModal } from "../hooks/useModal";

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState<Tour | undefined>(undefined);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { open: showRefund, openModal: openRefund, closeModal: closeRefund } = useModal();

  useEffect(() => {
    loadTours();
  }, []);

  const loadTours = async () => {
    try {
      const toursData = await getTours();
      setTours(toursData.slice(0, 6)); // Mostrar solo los primeros 6 en home
    } catch (error) {
      console.error("Error loading tours:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    openRefund();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "water-adventure":
        return "🏊‍♂️";
      case "nature":
        return "🌿";
      case "romantic":
        return "💕";
      default:
        return "🏝️";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "water-adventure":
        return "from-blue-500 to-cyan-500";
      case "nature":
        return "from-green-500 to-emerald-500";
      case "romantic":
        return "from-pink-500 to-rose-500";
      default:
        return "from-teal-500 to-blue-500";
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getCategoryColor(tour.category || "default")}`}
                  >
                    <span className="mr-1">
                      {getCategoryIcon(tour.category || "default")}
                    </span>
                    {tour.categoryLabel || "Adventure"}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 mr-0.5" />
                    ))}
                    <span className="text-sm font-medium ml-1">5</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {tour.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Details */}
                <div className="space-y-2 mb-6">
                  {tour.duration && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-teal-500" />
                      <span>{tour.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-teal-500" />
                    <span>
                      {tour.groupInfo
                        ? `Group of people (max. ${tour.groupInfo} people)`
                        : 'Group of people (max. 8 people)'}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">
                      ${tour.price}
                    </span>
                    <span className="text-gray-500 ml-1">/ person</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={`/service/${tour.id}`}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">
                      {t.services.viewDetails}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>

                  <button
                    onClick={() => handleBookNow(tour)}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">
                      {t.services.bookNow}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-teal-400 hover:to-blue-500"
          >
            View All Tours
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

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
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedTour={selectedTour}
        />
      )}
    </section>
  );
};

export default Services;
