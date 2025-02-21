'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
        if (process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
          emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
  
          const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            reply_to: formData.email,
          };
  
          const response = await emailjs.send(
            "service_1htcbf5",
            "template_foaj1oc",
            templateParams
          );
  
          if (response.status === 200) {
            setSubmitMessage('Thank you! Your message has been sent.');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            setSubmitMessage('Something went wrong. Please try again.');
            console.error("EmailJS Error:", response);
          }
        } else {
          console.error("Error: NEXT_PUBLIC_EMAILJS_USER_ID is not set.");
          setSubmitMessage("Error: Contact form is temporarily unavailable."); 
          return; 
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
        setSubmitMessage('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div className='max-w-[800px] mx-auto'>
        <h2 className="text-5xl font-bold text-center mb-4 pb-8">Contact Me</h2>
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`} required /> {/* Added required */}
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`} required /> {/* Added required */}
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`mt-1 block w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`} required /> {/* Added required */}
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`mt-1 block w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`} required /> {/* Added required */}
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div>
            <button type="submit" disabled={isSubmitting} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            </div>

            {submitMessage && <p className="mt-4 text-center text-sm text-green-600">{submitMessage}</p>}
        </form>
        </div>
    </div>
  );
}