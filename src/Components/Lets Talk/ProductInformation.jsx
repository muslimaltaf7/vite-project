import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../Spinner'

const ProductInformation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    marketingSolutions: '',
    location: '',
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
  const [loading, setloading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxUpEfgKYbfPjb9fNi9zmuPL0TPsC4xob8oExuUQXEPxVRP1KuUBCykjYmKB6EeIxlQQQ/exec', {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          jobTitle: formData.jobTitle,
          marketingSolutions: formData.marketingSolutions,
          location: formData.location,
          message: formData.message,
          contactInfo: formData.contactInfo
        }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        }
      });
  
      setloading(false);
  
      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Details Sent Successfully",
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "An Error Occurred",
        });
      }
    } catch (error) {
      setloading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "A Network Error Occurred",
      });
    }
  };
  

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex my-6">
            {/* First Name field */}
            <div className="w-full md:w-1/2 pt-4 md:mb-0">
              <label className="py-2 pr-8 leading-tight text-md" htmlFor="first-name">
                First Name *
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
                required
              />
            </div>
            {/* Last Name field */}
            <div className="w-full md:w-1/2 px-3 pt-4 md:mb-0">
              <label className="py-2 px-3 pr-8 leading-tight text-md" htmlFor="last-name">
                Last Name *
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
                required
              />
            </div>
          </div>
          {/* Email field */}
          <div className="mb-4">
            <label className="mb-2 leading-tight text-md" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
              required
            />
          </div>

          {/* Job Title field */}
          <div className="mb-4">
            <label className="mb-2 leading-tight text-md" htmlFor="job-title">
              Job Title *
            </label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight bg-transparent border-b border-gray-400 outline-none h-10 placeholder-custom"
              required
            />
          </div>

          {/* Marketing challenges dropdown field */}
          <div className="mb-4">
            <label className="mb-2 leading-tight text-md" htmlFor="marketing-solutions">
              Help me solve marketing challenges with solutions for: *
            </label>
            <select
              className="w-full border-b border-gray-400 py-2 pr-8 leading-tight focus:border-gray-500 text-md font-bold text-[#05195F] bg-transparent h-12 outline-none"
              id="marketing-solutions"
              name="marketingSolutions"
              value={formData.marketingSolutions}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="More effective MQLs to grow our sales pipeline">More effective MQLs to grow our sales pipeline</option>
              <option value="Influencing online buyers with my brand or solution">Influencing online buyers with my brand or solution</option>
              <option value="Driving web traffic/event registration">Driving web traffic/event registration</option>
              <option value="High-quality B2B data intelligence">High-quality B2B data intelligence</option>
              <option value="Channel/Partner Marketing">Channel/Partner Marketing</option>
              <option value="Other (please specify)">Other (please specify)</option>
            </select>
          </div>

          {/* Location field */}
          <div className="mb-4">
            <label className="mb-2 leading-tight text-md" htmlFor="location">
              Location *
            </label>
            <select
              className="w-full border-b py-2 pr-8 leading-tight border-gray-400 text-md font-bold text-[#05195F] bg-transparent h-12 outline-none"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="US">US</option>
              <option value="LATAM">LATAM</option>
              <option value="CANADA">CANADA</option>
              <option value="EMEA">EMEA</option>
              <option value="UAE">UAE</option>
              <option value="INDIA">INDIA</option>
              <option value="APAC">APAC</option>
              <option value="ANZ">ANZ</option>
            </select>
          </div>

          {/* Message field */}
          <div className="mb-4">
            <label className="mb-2 leading-tight text-md" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="appearance-none rounded-lg border border-gray-300 w-full py-2 h-16 px-3 text-gray-700 leading-tight focus:outline-black bg-transparent placeholder-custom"
            ></textarea>
          </div>

          {/* ContactInfo field */}
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
            <label className="mb-2 leading-tight tracking-wide text-md" htmlFor="contact-info">
              Please contact me with relevant info to my interests and business
            </label>
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center">
            {loading ?
             <Spinner />
             :
             <button
              className="bg-[#D52C5A] hover:bg-[#05195F] text-white py-2 px-12 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            }
          </div>
        </form>
      </div>
  );
};

export default ProductInformation;
