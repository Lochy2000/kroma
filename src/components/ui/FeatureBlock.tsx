import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureBlockProps {
  number: string;
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

export const FeatureBlock = ({ number, title, children, icon }: FeatureBlockProps) => {
  return (
    <motion.div
      className="group relative p-5 md:p-6 border border-[#1E3A47] bg-[#0F1F24]/50 backdrop-blur-sm hover:bg-[#1E3A47]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      {/* Decorative glow on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C0FF00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

      <div className="flex justify-between items-start mb-5 md:mb-6">
        <div className="text-[#C0FF00] p-2.5 md:p-3 bg-[#1E3A47]/50 rounded-full group-hover:bg-[#C0FF00] group-hover:text-[#0F1F24] transition-all duration-300">
          {icon}
        </div>
        <div className="font-syne font-black text-5xl md:text-6xl text-[#1E3A47] opacity-40 group-hover:opacity-100 group-hover:text-[#1E3A47] transition-all duration-500 select-none">
          {number}
        </div>
      </div>

      <h3 className="font-syne font-bold text-lg md:text-xl tracking-tight text-[#F0F0E8] mb-2 md:mb-3 group-hover:text-[#C0FF00] transition-colors">
        {title}
      </h3>
      <p className="text-[#F0F0E8]/60 leading-relaxed font-space text-sm group-hover:text-[#F0F0E8] transition-colors">
        {children}
      </p>
    </motion.div>
  );
};
