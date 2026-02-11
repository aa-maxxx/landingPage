"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { Smartphone } from 'lucide-react';
import QRCode from '../../public/htw/qr.webp';
import ScanBtn from '../../public/htw/scan_btn.webp';
import Amount from '../../public/htw/add_amount.webp';
import RefName from '../../public/htw/ref_name.webp';

const steps = [
  {

    title: 'QR Code',
    description: 'Send money quickly by scanning the QR code with your mobile payment app.',
    image: QRCode,
  },
  {

    title: 'Scan QR Code',
    description: 'Open your mobile payment app and scan the provided QR code to initiate payment.',
    image: ScanBtn,
  },
  {

    title: 'Add Amount',
    description: `Add the selected services' payment amount and confirm proceed.`,
    image: Amount,
  },
  {

    title: 'Add Reference',
    description: 'Add YOUR_NAME and SERVICE_NAME for reference and confirmation. For example, "Asif - Cleaning Service".',
    image: RefName,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(30)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${(i % 6) * 20}%`}
              y1="0%"
              x2={`${(i % 6) * 20}%`}
              y2="100%"
              stroke={i % 2 === 0 ? '#f97316' : '#3b82f6'}
              strokeWidth="1"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Smartphone className="w-5 h-5" />
            <span className="font-semibold">Simple Process</span>
          </motion.div>

          <h2 className="mb-6 text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            How It{' '}
            <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            Book professional home services in just a few taps. Quick, easy, and secure payments via your phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-linear-to-r from-orange-500 to-transparent -z-10"></div>
                )}

                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">{index + 1}</span>
                  </div>

                  {/* Image */}
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 bg-[#eeecef]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      className={`h-full w-full ${index === 0 ? "object-contain" : "object-cover" }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-900 dark:text-white mb-3 text-xl lg:text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
           <strong>Note :</strong> Once the payment has been processed, a service representative will reach out to you for further details and to schedule your service appointment.
          </div>

        {/* Payment Methods */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            We Accept Multiple Payment Methods
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['bKash',  'Cash on Delivery'].map((method, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-8 py-4 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gray-900 dark:text-white font-bold text-lg">
                  {method}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-linear-to-r from-orange-600 to-orange-500 text-white px-10 py-5 rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all group text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}