import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../../constants/animations';
import { SocialProof } from '../ui/SocialProof';
import { TechSpecsCard } from '../ui/TechSpecsCard';
import heroImage from '../../assets/Kroma-sunglasses.png';

export const HeroSection = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="h-px w-8 md:w-12 bg-[#C0FF00]"></span>
            <span className="text-[#C0FF00] font-space font-bold uppercase tracking-[0.2em] text-xs">
              Kroma K-01 Apex
            </span>
          </motion.div>

          {/* Mobile Layout: Text + Image Side by Side */}
          <div className="lg:hidden">
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 mb-6 md:mb-8"
            >
              {/* Headline Text */}
              <h1 className="font-syne font-extrabold text-4xl sm:text-5xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0E8] to-[#94a3b8] flex-1">
                SEE THE <br/>
                WORLD <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0FF00] to-[#84cc16] filter drop-shadow-[0_0_15px_rgba(192,255,0,0.3)]">
                  LOUDER.
                </span>
              </h1>

              {/* Sunglasses Image - Mobile Only */}
              <motion.div
                className="relative w-32 sm:w-40 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#C0FF00] rounded-full blur-[60px] opacity-20 animate-pulse" />
                <img
                  src={heroImage}
                  alt="Kroma Sunglasses Apex Model"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                  style={{
                    filter: "contrast(1.1) saturate(1.1)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Headline */}
          <motion.h1
            variants={itemVariants}
            className="hidden lg:block font-syne font-extrabold text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0E8] to-[#94a3b8]"
          >
            SEE THE <br/>
            WORLD <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0FF00] to-[#84cc16] filter drop-shadow-[0_0_15px_rgba(192,255,0,0.3)]">
              LOUDER.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-[#F0F0E8]/70 max-w-md leading-relaxed mb-6 md:mb-10 font-space border-l-2 border-[#1E3A47] pl-4 md:pl-6">
            High-contrast polarized lenses encased in aerospace-grade acetate. Engineered for clarity, designed for impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center">
            {/* Primary CTA */}
            <a href="#shop" className="group relative inline-flex items-center justify-center gap-3 md:gap-4 bg-[#C0FF00] text-[#0F1F24] px-6 md:px-8 py-3 md:py-4 font-syne font-bold text-base md:text-lg tracking-wide overflow-hidden hover:shadow-[0_0_30px_rgba(192,255,0,0.4)] transition-shadow duration-300 w-full sm:w-auto">
              <span className="relative z-10">SHOP THE DROP</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
            </a>

            {/* Secondary CTA */}
            <a href="#specs" className="text-[#F0F0E8] text-sm font-bold uppercase tracking-widest hover:text-[#C0FF00] transition-colors flex items-center justify-center sm:justify-start gap-2 group py-3 sm:py-0">
              View Specs <span className="block w-0 group-hover:w-4 h-px bg-[#C0FF00] transition-all"></span>
            </a>
          </motion.div>

          {/* Mobile Tech Specs - Inline */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-4 border border-[#1E3A47] bg-[#0F1F24]/40 backdrop-blur-sm md:hidden"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-syne font-bold text-lg text-[#F0F0E8]">K-01 "Apex"</p>
              <span className="bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>
            </div>
            <p className="text-sm text-[#F0F0E8]/60 font-space mb-3">Deep Resin frame with polarized Volt™ Lenses.</p>
            <div className="flex gap-2 text-[#C0FF00] text-xs font-mono uppercase">
              <span className="border border-[#1E3A47] px-2 py-1">Polarized</span>
              <span className="border border-[#1E3A47] px-2 py-1">UVA/UVB</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <SocialProof />
        </motion.div>

        {/* Hero Image Section - Desktop Only */}
        <motion.div
          className="hidden lg:flex lg:col-span-7 relative h-[600px] items-center justify-center order-2"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Abstract circular glow behind product */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#C0FF00] rounded-full blur-[120px] md:blur-[180px] opacity-15 md:opacity-20 animate-pulse" />

          {/* PRODUCT IMAGE */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center z-10 px-4 md:px-0"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={heroImage}
              alt="Kroma Sunglasses Apex Model"
              className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              style={{
                filter: "contrast(1.1) saturate(1.1)",
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
              }}
            />

            {/* Floating Tech Specs Card - Desktop Only */}
            <TechSpecsCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
