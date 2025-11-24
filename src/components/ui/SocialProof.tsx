import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-8 md:mt-16 flex items-center gap-3 md:gap-4 opacity-60 hover:opacity-100 transition-opacity"
    >
      <div className="flex -space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F1F24] bg-[#1E3A47] flex items-center justify-center overflow-hidden">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" className="w-full h-full"/>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex text-[#C0FF00] text-xs gap-1">
          <Sun className="w-3 h-3 fill-current"/>
          <Sun className="w-3 h-3 fill-current"/>
          <Sun className="w-3 h-3 fill-current"/>
          <Sun className="w-3 h-3 fill-current"/>
          <Sun className="w-3 h-3 fill-current"/>
        </div>
        <span className="text-xs font-space font-bold mt-1">TrustPilot 4.9/5</span>
      </div>
    </motion.div>
  );
};
