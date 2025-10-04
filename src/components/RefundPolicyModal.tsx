import React from "react";


interface RefundPolicyModalProps {
  open: boolean;
  onAccept: () => void;
  onReject: () => void;
}

const RefundPolicyModal: React.FC<RefundPolicyModalProps> = ({ open, onAccept, onReject }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        <button
          onClick={onReject}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
  <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">Refund Policy</h2>
        <div className="text-gray-700 space-y-4 text-base mb-6">
       
          
        </div>
        <div className="text-gray-900 font-medium text-center mb-6">
          To continue, please confirm if you accept our refund policy.
          <br />
          <a
            href="/politica-devolucion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-teal-800 text-sm mt-2 inline-block"
          >
            View full policy
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={onReject}
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
          >
            Reject
          </button>
          <button
            onClick={onAccept}
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyModal;
