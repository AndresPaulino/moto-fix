'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Zap, ArrowRight, ChevronDown, User, Mail, MessageSquare, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Hero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you! We'll contact you soon about your motorcycle service.");
  };

  return (
    <section className='relative min-h-screen flex items-center pt-20'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90'></div>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800'></div>
      </div>

      <div className='container relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className='inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6'>
              <Zap className='w-4 h-4 text-red-500' />
              <span className='text-sm text-red-500 font-semibold'>24/7 Emergency Service</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
              Mobile Motorcycle
              <span className='block gradient-text'>Repair in Miami</span>
            </h1>

            <p className='text-xl text-gray-300 mb-8'>
              Professional motorcycle repair that comes to you. From emergency roadside assistance to scheduled maintenance, we
              bring the shop to your location.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <Button variant='gradient' size='lg' asChild>
                <a href='tel:7864706864' className='flex items-center gap-2'>
                  <Phone className='w-5 h-5' />
                  Call Now
                </a>
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
                asChild
              >
                <a href='#contact' className='flex items-center gap-2'>
                  Book Service
                  <ArrowRight className='w-5 h-5' />
                </a>
              </Button>
            </div>

            <div className='flex flex-wrap gap-6 text-gray-300'>
              <div className='flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-orange-500' />
                <span>Miami & Surrounding Areas</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5 text-orange-500' />
                <span>Available 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Replacing the image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='hidden md:block'
          >
            <div className='relative'>
              {/* Glass-morphism contact form */}
              <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl'>
                <div className='text-center mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Wrench className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2'>Get Service Now</h3>
                  <p className='text-gray-300 text-sm'>Fill out the form below and we'll contact you within 30 minutes</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                    <Input
                      type='text'
                      placeholder='Your Name'
                      required
                      className='pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                    />
                  </div>

                  <div className='relative'>
                    <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                    <Input
                      type='tel'
                      placeholder='Phone Number'
                      required
                      className='pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                    />
                  </div>

                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                    <Input
                      type='email'
                      placeholder='Email (Optional)'
                      className='pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-orange-400/20'
                    />
                  </div>

                  <div className='relative'>
                    <MessageSquare className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
                    <Textarea
                      placeholder='Describe your motorcycle issue or service needed...'
                      rows={3}
                      required
                      className='pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-orange-400/20 resize-none'
                    />
                  </div>

                  <Button
                    type='submit'
                    variant='gradient'
                    size='lg'
                    className='w-full h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    Get Free Quote
                  </Button>
                </form>

                <div className='mt-6 text-center'>
                  <p className='text-xs text-gray-400'>By submitting, you agree to our terms and privacy policy</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse'></div>
              <div className='absolute -bottom-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-1000'></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <ChevronDown className='w-8 h-8 text-white/50' />
      </motion.div>
    </section>
  );
}
