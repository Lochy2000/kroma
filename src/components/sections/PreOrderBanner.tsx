import { motion } from 'framer-motion';

export const PreOrderBanner = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#C0FF00] text-[#0F1F24] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6"
      >
        <h2 className="font-syne font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter mb-4 md:mb-6">
          DROP 001
        </h2>
        <p className="font-space font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 tracking-wide uppercase">
          Limited to 500 Units Worldwide
        </p>
        <button className="bg-[#0F1F24] text-[#F0F0E8] px-8 md:px-10 py-3 md:py-4 font-syne font-bold text-lg md:text-xl hover:scale-105 transition-transform w-full sm:w-auto">
          SECURE YOUR PAIR
        </button>
      </motion.div>
    </section>
  );
};
