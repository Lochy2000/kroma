import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { MobileMenu } from '../ui/MobileMenu';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#C0FF00] text-[#0F1F24] text-[10px] sm:text-xs font-bold font-space tracking-widest py-2.5 md:py-2 text-center uppercase px-4">
        <span className="hidden sm:inline">Free Shipping | Pre-Orders Today - <span className="underline cursor-pointer">Learn More</span></span>
        <span className="sm:hidden">Pre-Order Now - <span className="underline cursor-pointer">Details</span></span>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-[34px] sm:top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 md:py-4 bg-[#0F1F24]/90 backdrop-blur-md shadow-lg border-b border-[#1E3A47]' : 'py-4 md:py-6 bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">

          {/* Left Links (Desktop) */}
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase text-[#F0F0E8]/80 font-space">
            <a href="#product" className="hover:text-[#C0FF00] transition-colors duration-300">Product</a>
            <a href="#features" className="hover:text-[#C0FF00] transition-colors duration-300">Features</a>
            <a href="#contact" className="hover:text-[#C0FF00] transition-colors duration-300">Contact</a>
          </div>

          {/* Logo */}
          <div className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tighter text-[#F0F0E8] flex-shrink-0">
            KROMA<span className="text-[#C0FF00]">.</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <Search className="w-5 h-5 text-[#F0F0E8] hover:text-[#C0FF00] cursor-pointer transition-colors hidden md:block" />
            <div className="relative group cursor-pointer hidden md:block">
              <ShoppingBag className="w-5 h-5 text-[#F0F0E8] group-hover:text-[#C0FF00] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <button
              className="md:hidden text-[#F0F0E8] min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
