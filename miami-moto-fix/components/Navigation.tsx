'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Wrench, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center'>
              <Wrench className='w-6 h-6 text-white' />
            </div>
            <span className={cn('font-bold text-xl transition-colors duration-300', scrolled ? 'text-foreground' : 'text-white')}>
              Miami Moto Fix
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#services'
              className={cn(
                'transition-colors duration-300 hover:text-accent',
                scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-orange-300'
              )}
            >
              Services
            </a>
            <a
              href='#process'
              className={cn(
                'transition-colors duration-300 hover:text-accent',
                scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-orange-300'
              )}
            >
              How It Works
            </a>
            <a
              href='#reviews'
              className={cn(
                'transition-colors duration-300 hover:text-accent',
                scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-orange-300'
              )}
            >
              Reviews
            </a>
            <a
              href='#contact'
              className={cn(
                'transition-colors duration-300 hover:text-accent',
                scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-orange-300'
              )}
            >
              Contact
            </a>
            <Button variant='gradient' size='lg' asChild>
              <a href='tel:7864706864' className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                (786) 470-6864
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn('md:hidden transition-colors duration-300', scrolled ? 'text-foreground' : 'text-white')}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='md:hidden bg-background border-t'>
          <div className='container mx-auto px-4 py-4 space-y-4'>
            <a href='#services' className='block py-2 text-foreground hover:text-accent transition-colors'>
              Services
            </a>
            <a href='#process' className='block py-2 text-foreground hover:text-accent transition-colors'>
              How It Works
            </a>
            <a href='#reviews' className='block py-2 text-foreground hover:text-accent transition-colors'>
              Reviews
            </a>
            <a href='#contact' className='block py-2 text-foreground hover:text-accent transition-colors'>
              Contact
            </a>
            <Button variant='gradient' className='w-full' asChild>
              <a href='tel:7864706864'>Call Now: (786) 470-6864</a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
