import React from 'react';
import { useContactosPagina } from '../hooks/contactos_pagina';

const ContactoOficial: React.FC = () => {
  const { contactos } = useContactosPagina();
  const contacto = contactos[0];

  if (!contacto) return null;

  return (
    <ul className="list-disc pl-6 leading-relaxed">
      {(contacto.tel_1 || contacto.tel_2) && (
        <li>
          📞 Phone / WhatsApp: {contacto.tel_1}
          {contacto.tel_2 ? ' / ' + contacto.tel_2 : ''}
        </li>
      )}
      {contacto.whatsapp && (
        <li>
          📱 WhatsApp: <a href={`https://wa.me/${contacto.whatsapp.replace(/[^\d]/g, '')}`} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">{contacto.whatsapp}</a>
        </li>
      )}
      {contacto.correo && (
        <li>
          📧 Email: <a href={`mailto:${contacto.correo}`} className="text-teal-700 underline">{contacto.correo}</a>
        </li>
      )}
      {contacto.instagram && (
        <li>
          📸 Instagram: <a href={contacto.instagram} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">{contacto.instagram}</a>
        </li>
      )}
      {contacto.facebook && (
        <li>
          📘 Facebook: <a href={contacto.facebook} className="text-teal-700 underline" target="_blank" rel="noopener noreferrer">{contacto.facebook}</a>
        </li>
      )}
    </ul>
  );
};

export default ContactoOficial;
