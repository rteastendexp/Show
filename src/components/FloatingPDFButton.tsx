import React from "react";

const FloatingPDFButton: React.FC = () => (
  <a
    href="/politica_devolucion.txt"
    download
    className="fixed left-4 bottom-4 z-50 px-4 py-2 bg-teal-600 text-white rounded shadow-lg hover:bg-teal-700 transition-colors text-sm font-semibold"
    style={{ minWidth: 180 }}
  >
  Download policy (.txt)
  </a>
);

export default FloatingPDFButton;
