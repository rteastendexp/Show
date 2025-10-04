import React from 'react';
import Contact from '../components/Contact';
import { useContactosPagina } from '../hooks/contactos_pagina';

const ContactPage: React.FC = () => {
  const { contactos } = useContactosPagina();
  const contacto = contactos[0];
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Estamos aquí para hacer realidad tu aventura en Roatán
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200">WhatsApp Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">&lt; 1h</div>
                <div className="text-blue-200">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-blue-200">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is the best time to visit?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Roatan is perfect year-round. The dry season runs from February to August, but our tours operate all year with the best safety conditions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What should I bring for the tours?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We recommend sunscreen, insect repellent, comfortable clothing, non-slip shoes, and a change of clothes for water activities. We provide all necessary equipment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Are the tours suitable for children?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, most of our tours are family-friendly. Some have age restrictions for safety. Check each tour's details or contact us for specific recommendations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Where does the tour start?
                  </h3>
                  <p className="text-gray-600 text-sm">
Each excursion has a designated meeting point, which we will confirm at the time of booking, to ensure convenience and easy access.                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We accept cash (US dollars and lempiras), PayPal, and bank transfers. For online bookings, we prefer PayPal for security.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is your cancellation policy?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free cancellation up to 24 hours before the tour. For weather-related cancellations, we offer rescheduling or a full refund.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Emergency Contact
              </h3>
              <p className="text-red-700 mb-4">
                If you have an emergency during your tour or need immediate assistance:
              </p>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-red-800">
                  📞 {contacto?.tel_1}
                  {contacto?.tel_2 ? ' / ' + contacto.tel_2 : ''}
                </div>
                <div className="text-lg font-semibold text-red-800">
                  📱 WhatsApp {contacto?.whatsapp || '24/7'}
                </div>
              </div>
              <p className="text-sm text-red-600 mt-4">
                Our team is always available to ensure your safety and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
