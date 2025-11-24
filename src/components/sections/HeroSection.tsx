import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../constants/animations';
import heroImage from '../../assets/Kroma-sunglasses.png';

export const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile Layout: Text + Image Side by Side */}
            <div className="lg:hidden flex items-start gap-4">
              {/* Headline Text */}
              <motion.h1
                variants={itemVariants}
                className="font-syne font-extrabold text-4xl sm:text-5xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0E8] to-[#94a3b8] flex-1"
              >
                SEE THE <br/>
                WORLD <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0FF00] to-[#84cc16] filter drop-shadow-[0_0_15px_rgba(192,255,0,0.3)]">
                  LOUDER.
                </span>
              </motion.h1>

              {/* Sunglasses Image - Mobile Only */}
              <motion.div
                variants={itemVariants}
                className="relative w-32 sm:w-40 flex-shrink-0"
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
            </div>

            {/* Desktop Headline */}
            <motion.h1
              variants={itemVariants}
              className="hidden lg:block font-syne font-extrabold text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0E8] to-[#94a3b8]"
            >
              SEE THE <br/>
              WORLD <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0FF00] to-[#84cc16] filter drop-shadow-[0_0_15px_rgba(192,255,0,0.3)]">
                LOUDER.
              </span>
            </motion.h1>
          </motion.div>

          {/* Hero Image Section - Desktop Only */}
          <motion.div
            className="hidden lg:flex lg:col-span-7 relative h-[600px] items-start justify-center order-2"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Abstract circular glow behind product */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#C0FF00] rounded-full blur-[120px] md:blur-[180px] opacity-15 md:opacity-20 animate-pulse" />

            {/* PRODUCT IMAGE */}
            <div className="relative w-full flex flex-col items-center justify-start z-10 px-4 md:px-0">
              <motion.div
                className="relative w-full"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={heroImage}
                  alt="Kroma Sunglasses Apex Model"
                  className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  style={{
                    filter: "contrast(1.1) saturate(1.1)",
                    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
                  }}
                />
              </motion.div>

              {/* Tech Specs Box - Positioned under and to the right of sunglasses */}
              <motion.div
                variants={itemVariants}
                className="-mt-8 self-end p-4 border border-[#1E3A47] bg-[#0F1F24]/80 backdrop-blur-sm max-w-xs"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-syne font-bold text-base text-[#F0F0E8]">K-01 "Apex"</p>
                  <span className="bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>
                </div>
                <p className="text-sm text-[#F0F0E8]/70 font-space mb-3">Deep Resin frame with polarized Volt™ Lenses.</p>
                <div className="flex gap-2 text-[#C0FF00] text-xs font-mono uppercase">
                  <span className="border border-[#1E3A47] px-2 py-1">Polarized</span>
                  <span className="border border-[#1E3A47] px-2 py-1">UVA/UVB</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
