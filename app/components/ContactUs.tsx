"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      {/* Soft Bubble Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-125 h-125 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/15 dark:bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            className="inline-block bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.div>
          <h2 className="mb-6 text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Request a{' '}
            <span className="bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base lg:text-lg">
            Connect with our team of professionals in Dhaka. We'll respond within 2 hours during business hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="mb-8 text-gray-900 dark:text-white text-2xl">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+880 1XXX-XXXXXX', color: 'from-orange-500 to-orange-600' },
                  { icon: Mail, label: 'Email', value: 'info@homeservepro.com', color: 'from-blue-500 to-cyan-500' },
                  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', color: 'from-green-500 to-emerald-500' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`shrink-0 w-12 h-12 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">{item.label}</div>
                        <div className="text-gray-900 dark:text-white">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-linear-to-br from-orange-600 to-orange-500 rounded-3xl p-8 shadow-xl text-white">
              <h4 className="mb-6 text-xl">Why Choose Us</h4>
              <div className="space-y-4">
                {[
                  'Licensed & Insured',
                  'Background Checked',
                  'Same-Day Service Available',
                  '100% Satisfaction Guaranteed'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
              {submitted ? (
                <motion.div
                  className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-3xl p-10 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-600 dark:text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <div className="text-green-600 dark:text-green-400 text-2xl mb-3">Request Received!</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Our team will contact you within 2 hours during business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none transition-all ${focusedField === 'name'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                          }`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none transition-all ${focusedField === 'email'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                          }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none transition-all ${focusedField === 'phone'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                          }`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none transition-all ${focusedField === 'service'
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                          }`}
                      >
                        <option value="">Select a service</option>
                        <option value="electrician">Electrician</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="nurse">Healthcare Services</option>
                        <option value="babysitter">Professional Childcare</option>
                        <option value="flat-rent">Property Rentals</option>
                        <option value="home-shifting">Relocation Services</option>
                        <option value="cleaning">Premium Cleaning</option>
                        <option value="maintenance">Home Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none transition-all resize-none ${focusedField === 'message'
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                          : 'border-gray-200 dark:border-gray-700'
                        }`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-orange-600 text-white px-8 py-5 rounded-full hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Request
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}