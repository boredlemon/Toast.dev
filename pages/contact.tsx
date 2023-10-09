// pages/contact.tsx
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import MessageModal from '../components/MessageModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      // Send the form data to your server for email sending
      await axios.post('/api/contact/sendEmail', formData);
      setIsSubmitting(false);
      setMessage('Email sent successfully');
      setIsError(false);
      setShowMessageModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setMessage('Failed to send email');
      setIsError(true);
      setShowMessageModal(true);
    }
  };

  const closeMessageModal = () => {
    setShowMessageModal(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: 'linear-gradient(to bottom, #000046, #1CB5E0)' }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Email Coffee!</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition duration-300 h-32"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
  <Link href="/">
    <a className="text-blue-500 hover:underline">Return Home</a>
  </Link>
</div>
<div className="mt-4 text-center">
  <a>Email form made by Coffee aka Dolphin#6086! Hope you enjoy!</a>
</div>
      </div>
      {showMessageModal && (
        <MessageModal message={message} onClose={closeMessageModal} isError={isError} />
      )}
    </div>
  );
}
