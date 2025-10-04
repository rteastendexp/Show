import React, { useState } from 'react';
import { useContactos } from '../hooks/contactos';
import { useContactosPagina } from '../hooks/contactos_pagina';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Facebook, Clock, CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactForm } from '../types';

const ThankYouModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-green-700">Thank you for your feedback!</h2>
        <button onClick={onClose} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg font-semibold">Close</button>
      </div>
    </div>
  );
};

const ContactFormModal: React.FC<{ open: boolean; onClose: () => void; onThankYou: () => void }> = ({ open, onClose, onThankYou }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { sendContact } = useContactos();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    sendContact({
      nombre: formData.name,
      email: formData.email,
      telefono: formData.phone,
      mensaje: formData.message
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
    onThankYou();
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center">{t.contact.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.name} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                placeholder="tu@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t.contact.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
              placeholder="+504 0000-0000"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {t.contact.message} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Cuéntanos sobre tu aventura ideal..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            {t.contact.send}
          </button>
        </form>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const { contactos } = useContactosPagina();
  const contacto = contactos[0];
  const contactInfo = contacto ? [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t.contact.phone,
      value: `${contacto.tel_1}${contacto.tel_2 ? ' - ' + contacto.tel_2 : ''}`,
      href: contacto.tel_1 ? `tel:${contacto.tel_1}` : undefined,
      description: 'Llámanos directamente',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t.contact.whatsapp,
      value: contacto.whatsapp,
      href: contacto.whatsapp ? `https://wa.me/${contacto.whatsapp.replace(/[^\d]/g, '')}` : undefined,
      description: 'Respuesta inmediata',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t.contact.email,
      value: contacto.correo,
      href: contacto.correo ? `mailto:${contacto.correo}` : undefined,
      description: 'Envíanos un correo',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      value: contacto.instagram,
      href: contacto.instagram,
      description: 'Síguenos en Instagram',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: 'Facebook',
      value: contacto.facebook,
      href: contacto.facebook,
      description: 'Síguenos en Facebook',
    },
  ] : [];

  const socialLinks = contacto ? [
    {
      name: 'WhatsApp',
      href: contacto.whatsapp ? `https://wa.me/${contacto.whatsapp.replace(/[^\d]/g, '')}` : undefined,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.506z"/>
        </svg>
      ),
      color: 'hover:text-green-500',
    },
    {
      name: 'Instagram',
      href: contacto.instagram,
      icon: <Instagram className="w-6 h-6" />,
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      href: contacto.facebook,
      icon: <Facebook className="w-6 h-6" />,
      color: 'hover:text-blue-500',
    },
  ] : [];

  const businessHours = [
    { day: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '8:00 AM - 5:00 PM' },
    { day: 'Domingos', hours: '9:00 AM - 4:00 PM' },
  ];


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna 1: Tarjetas de contacto y botón */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const hideValue = info.title === 'Instagram' || info.title === 'Facebook';
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href && info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href && info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full min-w-0"
                  >
                    <div className="flex items-start space-x-4 mb-2">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 break-words">{info.title}</h3>
                        {!hideValue && (
                          <p className="text-gray-600 text-sm mb-1 break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs break-words">{info.description}</p>
                  </a>
                );
              })}
            </div>
            {/* Botón para abrir el modal */}
            <div className="flex justify-center mt-8">
              <button
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all duration-300 min-w-[220px] max-w-xs"
                style={{ minWidth: 220, maxWidth: 320 }}
                onClick={() => setShowModal(true)}
              >
          Write to us
              </button>
            </div>
          </div>
          {/* Columna 2: Horarios de Atención y Síguenos */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="flex items-center font-semibold text-gray-800 mb-4">
                <Clock className="w-5 h-5 mr-2 text-teal-500" />
                Horarios de Atención
              </h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-4">{t.contact.social}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-gray-600 transition-all duration-200 ${social.color} hover:scale-110 hover:shadow-md`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
  <ContactFormModal open={showModal} onClose={() => setShowModal(false)} onThankYou={() => setShowThankYou(true)} />
  <ThankYouModal open={showThankYou} onClose={() => setShowThankYou(false)} />
      </div>
    </section>
  );
};

export default Contact;
