import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed inset-0 z-[60] bg-[#0F1F24] flex flex-col p-8 md:hidden"
        >
          <div className="flex justify-end mb-12">
            <button onClick={onClose} className="text-[#F0F0E8]">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-syne font-bold text-[#F0F0E8]">
            <a href="#" onClick={onClose} className="hover:text-[#C0FF00]">Product</a>
            <a href="#" onClick={onClose} className="hover:text-[#C0FF00]">Technology</a>
            <a href="#" onClick={onClose} className="hover:text-[#C0FF00]">About</a>
            <a href="#" onClick={onClose} className="hover:text-[#C0FF00] text-[#C0FF00]">Cart (0)</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
