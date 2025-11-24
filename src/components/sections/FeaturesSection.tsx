import { motion } from 'framer-motion';
import { Sun, Shield, Eye } from 'lucide-react';
import { FeatureBlock } from '../ui/FeatureBlock';
import { containerVariants, itemVariants } from '../../constants/animations';

export const FeaturesSection = () => {
  return (
    <section className="relative z-10 border-t border-[#1E3A47] bg-[#0F1F24] py-16 md:py-24 lg:py-32 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2">TECHNICAL <span className="text-[#1E3A47]">MASTERY</span></h2>
            <p className="text-[#F0F0E8]/60 max-w-md text-sm md:text-base">We don't just make sunglasses. We engineer optical instruments for the modern world.</p>
          </div>
          <button className="text-[#C0FF00] border-b border-[#C0FF00] pb-1 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors text-xs md:text-sm">
            View Full Specs
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FeatureBlock number="01" title="Polarized Volt™" icon={<Sun size={20} strokeWidth={2.5} />}>
              Proprietary lens technology that enhances contrast while eliminating glare completely. See the world in HD.
            </FeatureBlock>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureBlock number="02" title="Ballistic Acetate" icon={<Shield size={20} strokeWidth={2.5} />}>
              Frames crafted from high-impact acetate and machined aluminum hinges. Built to withstand the drop.
            </FeatureBlock>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureBlock number="03" title="Precision Fit" icon={<Eye size={20} strokeWidth={2.5} />}>
              Engineered balance points ensure zero slipping, even during intense activity. Comfort meeting chaos.
            </FeatureBlock>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
