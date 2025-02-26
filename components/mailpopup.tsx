import React from 'react';

interface MailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailRedirect: () => void;
}

const MailPopup: React.FC<MailPopupProps> = ({ isOpen, onClose, onEmailRedirect }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--accent-color)] p-6 rounded-lg shadow-lg max-w-md w-full text-center text-white"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">
          My email address is: <strong>andwele.ancheta@outlook.com</strong>
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-white text-[var(--accent-color)] rounded hover:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-white text-[var(--accent-color)] rounded hover:bg-gray-100 transition-colors"
            onClick={onEmailRedirect}
          >
            Open Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailPopup;