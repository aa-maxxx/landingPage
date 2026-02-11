"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Zap, Droplet, Heart, Baby, Home, Truck, Sparkles, Key, ArrowRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Zap,
    title: 'Professional Electricians',
    description: 'Licensed electricians for installations, repairs, and emergency electrical services. Available 24/7 for urgent needs.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbGVjdHJpY2lhbiUyMHdvcmt8ZW58MXx8fHwxNzY0MzIwNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Droplet,
    title: 'Expert Plumbing',
    description: 'Certified plumbers for all residential and commercial plumbing needs. From repairs to complete installations.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyJTIwc2VydmljZXxlbnwxfHx8fDE3NjQ0MjUzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Heart,
    title: 'Healthcare Services',
    description: 'Registered nurses and healthcare professionals providing in-home medical care and assistance.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1562673462-877b3612cbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBudXJzZSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY0NDI1MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Baby,
    title: 'Professional Childcare',
    description: 'Vetted and experienced childcare professionals for your peace of mind. Background-checked and certified.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1600563093202-337471bde37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYWJ5c2l0dGVyJTIwY2hpbGRjYXJlfGVufDF8fHx8MTc2NDQyNTMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Key,
    title: 'Property Rentals',
    description: 'Premium apartment and property rental services. Find your ideal home in the best neighborhoods of Dhaka.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzMzIzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Truck,
    title: 'Relocation Services',
    description: 'Professional moving and relocation services within Dhaka. Fully insured and bonded teams.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1729628371767-7a833756b8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb3ZlcnMlMjB0cnVja3xlbnwxfHx8fDE3NjQ0MjUzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Premium Cleaning',
    description: 'Professional cleaning services for residential and commercial properties in Dhaka. Eco-friendly products.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1760827797819-4361cd5cd353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0NDIxNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Home,
    title: 'Home Maintenance',
    description: 'Complete property maintenance solutions across Dhaka. From minor repairs to major renovations.',
    price: '৳500',
    image: 'https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwbWFpbnRlbmFuY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NDI1MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll to a specific service index
  const scrollToIndex = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const targetScrollY = sectionTop + (index / services.length) * (sectionHeight - viewportHeight);
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const servicesSection = document.getElementById('services');
          if (!servicesSection) return;

          const rect = servicesSection.getBoundingClientRect();
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;

          if (rect.top <= 0 && rect.bottom >= viewportHeight) {
            const scrollProgress = Math.abs(rect.top) / (sectionHeight - viewportHeight);
            const newIndex = Math.min(
              Math.floor(scrollProgress * services.length),
              services.length - 1
            );

            if (newIndex !== currentIndex) {
              setDirection(window.scrollY > lastScrollY ? 1 : -1);
              setCurrentIndex(newIndex);
            }
          }

          lastScrollY = window.scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  const currentService = services[currentIndex];
  const Icon = currentService.icon;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-white dark:bg-gray-950"
      style={{ minHeight: `${services.length * 100}vh` }}
    >
      {/* Always Visible Header - Fixed at top */}
      <div className="relative z-10 bg-white dark:bg-gray-950 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span>Our Services</span>
          </motion.div>
          <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What We{' '}
            <span className="bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
        </div>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden z-20">
        {/* Soft Radial Lighting Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
          <div className="max-w-7xl w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, y: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Desktop Layout - Image Left | Text Right */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left - Image */}
                  <div className="relative h-150 rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Right - Content */}
                  <div className="text-left">
                    <div className="inline-flex items-center gap-3 bg-orange-600 rounded-2xl p-4 mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                      {currentService.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                      {currentService.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
                        <span className="text-sm">Starting from</span>
                        <span className="text-xl ml-2 font-bold">{currentService.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-5 py-3 rounded-full">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Dhaka</span>
                      </div>
                    </div>

                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>

                {/* Mobile/Tablet Layout - Stacked with Image Background and Text Overlay */}
                <div className="lg:hidden">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Image */}
                    <div className="relative h-150">
                      <ImageWithFallback
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Soft Dark Transparent Layer */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div>
                    </div>

                    {/* Text Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <div className="inline-flex items-center gap-3 bg-orange-600 rounded-2xl p-4 mb-4 shadow-lg self-start">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                        {currentService.title}
                      </h3>

                      <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                        {currentService.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="bg-orange-600 text-white px-5 py-2.5 rounded-full shadow-lg">
                          <span className="text-xs">Starting from</span>
                          <span className="text-lg ml-2 font-bold">{currentService.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-full">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Dhaka</span>
                        </div>
                      </div>

                      <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full hover:shadow-xl transition-all group self-start"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-semibold">Book Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                scrollToIndex(index);
              }}
              className={`rounded-full transition-all ${index === currentIndex
                ? 'w-2.5 h-10 bg-orange-500 shadow-lg'
                : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}