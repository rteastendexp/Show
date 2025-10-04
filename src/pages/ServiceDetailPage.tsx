import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Calendar,
  MapPin,
  Check,
  Phone,
  MessageCircle,
  Share2,
  Heart,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Tour } from "../types";
import { getTours } from "../services/googleSheets";
import BookingModal from "../components/BookingModal";
import RefundPolicyModal from "../components/RefundPolicyModal";
import { useModal } from "../hooks/useModal";

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { open: showRefund, openModal: openRefund, closeModal: closeRefund } = useModal();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    loadTour();
  }, [id]);

  const loadTour = async () => {
    try {
      const tours = await getTours();
      const foundTour = tours.find((t) => t.id === id);
      if (foundTour) {
        setTour(foundTour);
      } else {
        // Si no se encuentra el tour, redirigir a la página de servicios
        navigate("/services");
      }
    } catch (error) {
      console.error("Error loading tour:", error);
      navigate("/services");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share && tour) {
      try {
        await navigator.share({
          title: tour.name,
          text: tour.description,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert("¡Enlace copiado al portapapeles!");
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // En una implementación real, aquí se guardaría en localStorage o backend
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

  const tabs = [
    { id: "description", label: "Description" },
    { id: "included", label: "Included" },
    { id: "requirements", label: "Requirements" },
    { id: "location", label: "Location" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="h-96 bg-gray-200 rounded-2xl"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Tour not found
          </h2>
          <p className="text-gray-600 mb-6">
            The tour you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View All Tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb and Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/services"
              className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.common.back} a Servicios
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleFavorite}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isFavorite
                    ? "text-red-500 bg-red-50"
                    : "text-gray-400 hover:text-red-500"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images and Details */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getCategoryColor(
                    tour.category || "default"
                  )}`}
                >
                  <span className="mr-1">
                    {getCategoryIcon(tour.category || "default")}
                  </span>
                  {tour.category === "water-adventure"
                    ? "Water Adventure"
                    : tour.category === "nature"
                    ? "Nature"
                    : tour.category === "romantic"
                    ? "Romantic"
                    : "Adventure"}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
              </div>
            </div>

            {/* Tour Info Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "text-teal-600 border-b-2 border-teal-600 bg-teal-50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "description" && (
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {tour.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-teal-500 mr-2" />
                        <div>
                          <div className="text-sm font-medium">Duration</div>
                          <div className="text-gray-600">
                            {tour.duration || "3-4 hours"}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-teal-500 mr-2" />
                        <div>
                          <div className="text-sm font-medium">Group</div>
                          <div className="text-gray-600">Max. 8 people</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "included" && (
                  <div className="space-y-3">
                    {tour.included && tour.included.length > 0 ? (
                      tour.included.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">
                            Guía certificado
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">
                            Equipo de seguridad
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">
                            Transporte desde hotel
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">
                            Refrigerios y agua
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "requirements" && (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      {tour.requirements ||
                        "No special requirements. Suitable for all ages and fitness levels."}
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-800 mb-2">
                        Recommendations:
                      </h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Bring sunscreen and insect repellent</li>
                        <li>• Wear comfortable clothes and non-slip shoes</li>
                        <li>
                          • Bring a change of clothes if it is a water activity
                        </li>
                        <li>• Stay hydrated during the tour</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "location" && (
                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-teal-500 mr-2" />
                      <span className="font-medium">
                        East Roatan, Bay Islands, Honduras
                      </span>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive map</p>
                        <p className="text-sm">
                          Meeting point: Roatan East End
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Transportation from your hotel is included. We will contact you to coordinate the pick-up point.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Tour Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {tour.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-500 ml-1">(127 reviews)</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>East Roatan</span>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  ${tour.price}
                  <span className="text-lg font-normal text-gray-500">
                    {" "}
                    / person
                  </span>
                </div>
                <p className="text-gray-600">
                  Final price, no additional charges
                </p>
              </div>

              <button
                onClick={openRefund}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg mb-4"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Now
              </button>

              <div className="flex space-x-3">
                <a
                  href="tel:+50432267504"
                  className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
                <a
                  href="https://wa.me/50432267504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Safety and Trust */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-semibold text-green-800 mb-4">
                Book with Confidence
              </h3>
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Free cancellation up to 24h before</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Certified and experienced guides</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span>Liability insurance included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span>500+ happy adventurers</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Our team is ready to help you plan your perfect adventure.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-teal-500" />
                  <span>+504 3226-7504</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-teal-500" />
                  <span>WhatsApp available 24/7</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-teal-500" />
                  <span>Response in less than 1 hour</span>
                </div>
              </div>
            </div>
          </div>
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
          selectedTour={tour}
        />
      )}
    </div>
  );
};

export default ServiceDetailPage;
