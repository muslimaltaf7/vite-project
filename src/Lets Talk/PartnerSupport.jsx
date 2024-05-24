import React, { useState } from 'react';

const PartnerSupport = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    contactInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className=''>
      <div className="flex -mx-3 my-6">
        <div className="w-full md:w-1/2 px-3 pt-4 md:mb-0">
          <label className="py-2 pr-8 leading-tight text-md" htmlFor="first-name">
            First Name *
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 pt-4 md:mb-0">
          <label className="py-2 px-3 pr-8 leading-tight text-md" htmlFor="last-name">
            Last Name *
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 leading-tight text-md" htmlFor="email">
          Business Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Business Email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 leading-tight text-md" htmlFor="phone">
          Phone *
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="###-###-###"
          value={formData.phone}
          onChange={handleChange}
          className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 leading-tight text-md" htmlFor="company">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Company Name"
          value={formData.company}
          onChange={handleChange}
          className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 leading-tight text-md" htmlFor="website">
          Website *
        </label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="http://"
          value={formData.website}
          onChange={handleChange}
          className="appearance-none w-full py-2 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 leading-tight text-md" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Add more details to your inquiry"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none rounded-lg border border-gray-300 w-full py-2 h-24 px-3 text-gray-700 leading-tight focus:outline-black bg-transparent placeholder-custom"
        ></textarea>
      </div>

      <div className="mb-4 flex">
        <div>
        <input
          type="checkbox"
          id="contact-info"
          name="contactInfo"
          checked={formData.contactInfo}
          onChange={handleChange}
          className="mr-2 leading-tight"
        />
        </div>
        <div>
        <label className="mb-2 leading-3 text-md" htmlFor="contact-info">
          Please contact me about your products and services. Your personal data will be handled subject to our Privacy Policy. If you have previously opted-in, you will continue to receive messages from us unless you unsubscribe by visiting our Subscriptions Center.
        </label>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-[#D52C5A] hover:bg-[#05195F] text-white py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PartnerSupport;
