import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For arrow icons

export default function FAQ() {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
      offset: 200, // Trigger animation 200px before it enters the viewport
    });
  }, []);

  // State to keep track of which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open index when a question is clicked
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-16">
        <h2
          className="text-4xl font-bold py-3 text-gray-800 mb-8 text-center leading-tight tracking-wide shadow-md"
          data-aos="fade-up"
        >
          Frequently Asked Questions (FAQ)
        </h2>

        {/* FAQ Item 1 */}
        <div
          className="faq-item mb-4 p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleAnswer(0)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-gray-700">What is Campus Crib?</h3>
            {openIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`text-gray-600 mt-4 overflow-hidden transition-all duration-700 ease-in-out transform ${
              openIndex === 0 ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"
            }`}
          >
            Campus Crib is a platform where students can find affordable accommodations, PGs, and other student-centric services.
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div
          className="faq-item mb-4 p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleAnswer(1)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-gray-700">How can I book an accommodation?</h3>
            {openIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`text-gray-600 mt-4 overflow-hidden transition-all duration-700 ease-in-out transform ${
              openIndex === 1 ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"
            }`}
          >
            You can browse through the list of available accommodations, filter by preferences, and make a booking directly through the platform.
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div
          className="faq-item mb-4 p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleAnswer(2)}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-gray-700">What types of accommodations are available?</h3>
            {openIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`text-gray-600 mt-4 overflow-hidden transition-all duration-700 ease-in-out transform ${
              openIndex === 2 ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"
            }`}
          >
            We offer a range of accommodations, including PGs, hostels, apartments, and more. You can choose based on your preferences and budget.
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div
          className="faq-item mb-4 p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleAnswer(3)}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-gray-700">Can I cancel my booking?</h3>
            {openIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`text-gray-600 mt-4 overflow-hidden transition-all duration-700 ease-in-out transform ${
              openIndex === 3 ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"
            }`}
          >
            Yes, you can cancel your booking based on the cancellation policy of the accommodation provider. Check the details on the accommodation page.
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div
          className="faq-item mb-4 p-4 border-2 border-gray-300 rounded-lg cursor-pointer"
          onClick={() => toggleAnswer(4)}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium text-gray-700">How do I contact customer support?</h3>
            {openIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div
            className={`text-gray-600 mt-4 overflow-hidden transition-all duration-700 ease-in-out transform ${
              openIndex === 4 ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"
            }`}
          >
            If you need help, you can contact our customer support team through the contact form on our website or via our helpline number.
          </div>
        </div>
      </section>
    </div>
  );
}
