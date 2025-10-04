import React from "react";

const FloatingPrintButton: React.FC = () => {
  const handlePrint = () => {
    const policySection = document.querySelector("section.max-w-3xl");
    if (!policySection) return window.print();
    const printWindow = window.open('', '', 'width=900,height=700');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang='en'>
        <head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>Refund Policy</title>
          <style>
            @media print {
              @page { size: Letter; margin: 0.5in; }
              body { margin: 0; font-size: 18px; }
              header, footer, .print-hide { display: none !important; }
            }
            html, body { width: 100%; max-width: 100vw; box-sizing: border-box; }
            body { font-family: Arial, Helvetica, sans-serif; color: #222; background: #fff; font-size: 18px; line-height: 1.6; margin: 0; padding: 0; }
            h1, h2, h3, h4, h5, h6 { color: #0f766e; }
            ol, ul { margin-left: 1.5em; }
            .text-teal-700 { color: #0f766e; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .font-bold { font-weight: bold; }
            img, svg { max-width: 100%; height: auto; }
            section, div, p, li { box-sizing: border-box; word-break: break-word; }
          </style>
        </head>
        <body>
          <main style='max-width:800px;margin:auto;'>
            ${policySection.innerHTML}
          </main>
        </body>
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
