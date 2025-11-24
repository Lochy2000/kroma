import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../../constants/animations';
import { SocialProof } from '../ui/SocialProof';

export const ContentSection = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 lg:py-32">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Product Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
          <span className="h-px w-12 bg-[#C0FF00]"></span>
          <span className="text-[#C0FF00] font-space font-bold uppercase tracking-[0.2em] text-xs">
            Kroma K-01 Apex
          </span>
          <span className="h-px w-12 bg-[#C0FF00]"></span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#F0F0E8]/80 max-w-3xl mx-auto leading-relaxed mb-10 font-space text-center lg:text-left border-l-2 border-[#1E3A47] pl-6"
        >
          High-contrast polarized lenses encased in aerospace-grade acetate. Engineered for clarity, designed for impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center justify-center lg:justify-start"
        >
          {/* Primary CTA */}
          <a href="#shop" className="group relative inline-flex items-center justify-center gap-4 bg-[#C0FF00] text-[#0F1F24] px-8 py-4 font-syne font-bold text-lg tracking-wide overflow-hidden hover:shadow-[0_0_30px_rgba(192,255,0,0.4)] transition-shadow duration-300">
            <span className="relative z-10">SHOP THE DROP</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
          </a>

          {/* Secondary CTA */}
          <a href="#specs" className="text-[#F0F0E8] text-sm font-bold uppercase tracking-widest hover:text-[#C0FF00] transition-colors flex items-center justify-center gap-2 group py-3">
            View Specs <span className="block w-0 group-hover:w-4 h-px bg-[#C0FF00] transition-all"></span>
          </a>
        </motion.div>

        {/* Social Proof */}
        <div className="mt-12">
          <SocialProof />
        </div>
      </motion.div>
    </section>
  );
};
