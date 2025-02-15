// import { X } from "lucide-react";
// import { motion } from "framer-motion";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render if modal is closed

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
//       >
//         {/* Close Button */}
//         <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={onClose}>
//           <X className="w-6 h-6" />
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Contact Seller</h2>

//         {/* Contact Form */}
//         <form className="space-y-4">
//           <div>
//             <label className="block font-medium">Your Name</label>
//             <input type="text" className="input input-bordered w-full" placeholder="Enter your name" />
//           </div>
//           <div>
//             <label className="block font-medium">Your Email</label>
//             <input type="email" className="input input-bordered w-full" placeholder="Enter your email" />
//           </div>
//           <div>
//             <label className="block font-medium">Message</label>
//             <textarea className="textarea textarea-bordered w-full" placeholder="Enter your message"></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary w-full">Send Message</button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactModal;


'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function InquiryModal({ productName = 'Unknown Product', mobileNumber = '8597079194', onClose }) {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white p-6 rounded-xl shadow-xl w-96"
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">{step === 1 ? 'Enter Your Details' : 'Contact Number'}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          <div className="mt-4">
            <p className="text-sm text-gray-600">* All fields are mandatory</p>
            <div className="flex flex-col gap-3 mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="intent" value="buy" onChange={() => setSelectedOption('buy')} className="accent-blue-500" />
                I want to Buy
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="intent" value="sell" onChange={() => setSelectedOption('sell')} className="accent-blue-500" />
                I want to Sell
              </label>
            </div>
            <div className="mt-3">
              <label className="text-sm text-gray-600">Product Name</label>
              <div className="w-full border rounded-lg p-2 mt-1 bg-gray-100 text-gray-900">{productName}</div>
            </div>
            <button 
              onClick={() => selectedOption && setStep(2)} 
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              Next <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-gray-600">You can contact the supplier at:</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">{mobileNumber}</p>
            <button 
              onClick={() => setStep(1)} 
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg mt-4 hover:bg-gray-300"
            >
              Back
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}


