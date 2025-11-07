"use client";
import React, { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';

export default function RegisterInterest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!agreed) {
      alert('Please agree to the Privacy Policy');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for registering your interest!');
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-full min-h-[400px] md:min-h-[600px]">
            {/* Main large image */}
            <div className="absolute inset-10 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="/img1.jpg" 
                alt="Hotel" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Small top-right image */}
            <div className="absolute top-4 right-4 w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="/img3.jpg" 
                alt="Dubai Skyline" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Small bottom-left image */}
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="/img2.jpg" 
                alt="Pool Area" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-rose-900 mb-8">
              Register Your Interest
            </h2>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-rose-900 font-semibold mb-2">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-700 w-5 h-5" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-rose-900 font-semibold mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-700 w-5 h-5" />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-rose-900 font-semibold mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Number"
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
                  />
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-700 w-5 h-5" />
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 text-rose-700 border-gray-300 rounded focus:ring-rose-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-rose-700 hover:underline font-semibold">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-rose-700 to-rose-900 text-white font-bold py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}