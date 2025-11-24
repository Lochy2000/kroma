import { motion } from 'framer-motion';

export const TechSpecsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-12 right-0 md:-right-8 bg-[#0F1F24]/80 backdrop-blur-xl p-6 border border-[#1E3A47] max-w-xs rounded-none hidden md:block shadow-2xl"
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-syne font-bold text-xl text-[#F0F0E8]">K-01 "Apex"</p>
        <span className="bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>
      </div>
      <p className="text-sm text-[#F0F0E8]/60 font-space mb-4">Deep Resin frame with polarized Volt™ Lenses.</p>
      <div className="flex gap-2 text-[#C0FF00] text-xs font-mono uppercase">
        <span className="border border-[#1E3A47] px-2 py-1">Polarized</span>
        <span className="border border-[#1E3A47] px-2 py-1">UVA/UVB</span>
      </div>
    </motion.div>
  );
};
