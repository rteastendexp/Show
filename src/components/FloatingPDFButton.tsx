import React from "react";

const FloatingPrintButton: React.FC = () => {
  const handlePrint = () => {
    const policySection = document.querySelector("section.max-w-3xl");
    if (!policySection) return window.print();
    const printWindow = window.open('', '', 'width=900,height=700');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Refund Policy</title>
          <style>
            @media print {
              @page { margin: 1in; }
              body { margin: 0; }
              header, footer, .print-hide { display: none !important; }
            }
            body { font-family: sans-serif; color: #222; background: #fff; }
            h1, h2, h3, h4, h5, h6 { color: #0f766e; }
            ol, ul { margin-left: 1.5em; }
            .text-teal-700 { color: #0f766e; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .font-bold { font-weight: bold; }
          </style>
        </head>
        <body>${policySection.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
  return (
    <button
      onClick={handlePrint}
      className="fixed left-4 bottom-4 z-50 px-4 py-2 bg-teal-600 text-white rounded shadow-lg hover:bg-teal-700 transition-colors text-sm font-semibold print:hidden"
      style={{ minWidth: 180 }}
    >
      Print policy
    </button>
  );
};

export default FloatingPrintButton;
