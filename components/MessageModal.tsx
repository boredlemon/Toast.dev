// components/MessageModal.tsx
import React from 'react';

interface MessageModalProps {
  message: string;
  onClose: () => void;
  isError: boolean;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, onClose, isError }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isError ? 'bg-red-500' : 'bg-green-500'
      } bg-opacity-80`}
    >
      <div className="bg-white rounded p-4 shadow-md max-w-md text-center">
        <p className={`text-lg ${isError ? 'text-red-700' : 'text-green-700'}`}>{message}</p>
        <button
          onClick={onClose}
          className={`px-4 py-2 mt-4 bg-${isError ? 'red' : 'green'}-500 text-white rounded hover:bg-${
            isError ? 'red' : 'green'
          }-600 focus:outline-none`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
