// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Sun, Shield, Eye, ShoppingBag, Menu, X, Search } from 'lucide-react';

// // --- CONSTANTS & THEME ---
// // Since we cannot modify tailwind.config.js in this environment, 
// // we use these constants to reference the requested color palette via inline styles or template literals
// // if needed, but primarily we will use Tailwind's arbitrary value syntax (e.g., bg-[#0F1F24]).

// // Palette:
// // Deep Ocean Teal: #0F1F24
// // Muted Slate Blue: #1E3A47
// // Electric Lime: #C0FF00
// // Sand: #F0F0E8

// const fonts = `
//   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Syne:wght@400;700;800&display=swap');
  
//   .font-syne { font-family: 'Syne', sans-serif; }
//   .font-space { font-family: 'Space Grotesk', sans-serif; }
  
//   /* Custom Scrollbar */
//   ::-webkit-scrollbar {
//     width: 8px;
//   }
//   ::-webkit-scrollbar-track {
//     background: #0F1F24; 
//   }
//   ::-webkit-scrollbar-thumb {
//     background: #1E3A47; 
//     border-radius: 4px;
//   }
//   ::-webkit-scrollbar-thumb:hover {
//     background: #C0FF00; 
//   }
  
//   ::selection {
//     background-color: #C0FF00;
//     color: #0F1F24;
//   }
// `;

// // --- ANIMATION VARIANTS ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
//   visible: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// // --- COMPONENTS ---

// const NavBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Announcement Bar (from image_6d5ab2.jpg) */}
//       <div className="bg-[#C0FF00] text-[#0F1F24] text-[10px] md:text-xs font-bold font-space tracking-widest py-2 text-center uppercase px-4">
//         Free Shipping | Pre-Orders Today - <span className="underline cursor-pointer">Learn More</span>
//       </div>

//       {/* Main Navigation */}
//       <motion.nav 
//         className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#0F1F24]/90 backdrop-blur-md shadow-lg border-b border-[#1E3A47]' : 'py-6 bg-transparent'}`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
//           {/* Left Links (Desktop) */}
//           <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase text-[#F0F0E8]/80 font-space">
//             <a href="#product" className="hover:text-[#C0FF00] transition-colors duration-300">Product</a>
//             <a href="#features" className="hover:text-[#C0FF00] transition-colors duration-300">Features</a>
//             <a href="#contact" className="hover:text-[#C0FF00] transition-colors duration-300">Contact</a>
//           </div>

//           {/* Logo */}
//           <div className="font-syne font-extrabold text-3xl tracking-tighter text-[#F0F0E8] flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
//             KROMA<span className="text-[#C0FF00]">.</span>
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-6">
//             <Search className="w-5 h-5 text-[#F0F0E8] hover:text-[#C0FF00] cursor-pointer transition-colors hidden md:block" />
//             <div className="relative group cursor-pointer hidden md:block">
//               <ShoppingBag className="w-5 h-5 text-[#F0F0E8] group-hover:text-[#C0FF00] transition-colors" />
//               <span className="absolute -top-2 -right-2 bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
//             </div>
//             <button 
//               className="md:hidden text-[#F0F0E8]"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ type: "spring", bounce: 0, duration: 0.4 }}
//             className="fixed inset-0 z-[60] bg-[#0F1F24] flex flex-col p-8 md:hidden"
//           >
//             <div className="flex justify-end mb-12">
//               <button onClick={() => setMobileMenuOpen(false)} className="text-[#F0F0E8]">
//                 <X className="w-8 h-8" />
//               </button>
//             </div>
//             <div className="flex flex-col gap-8 text-2xl font-syne font-bold text-[#F0F0E8]">
//               <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C0FF00]">Product</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C0FF00]">Technology</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C0FF00]">About</a>
//               <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C0FF00] text-[#C0FF00]">Cart (0)</a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const FeatureBlock = ({ number, title, children, icon }) => (
//   <motion.div 
//     variants={itemVariants}
//     className="group relative p-6 border border-[#1E3A47] bg-[#0F1F24]/50 backdrop-blur-sm hover:bg-[#1E3A47]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
//   >
//     {/* Decorative glow on hover */}
//     <div className="absolute top-0 left-0 w-full h-1 bg-[#C0FF00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
    
//     <div className="flex justify-between items-start mb-6">
//       <div className="text-[#C0FF00] p-3 bg-[#1E3A47]/50 rounded-full group-hover:bg-[#C0FF00] group-hover:text-[#0F1F24] transition-all duration-300">
//         {icon}
//       </div>
//       <div className="font-syne font-black text-6xl text-[#1E3A47] opacity-40 group-hover:opacity-100 group-hover:text-[#1E3A47] transition-all duration-500 select-none">
//         {number}
//       </div>
//     </div>
    
//     <h3 className="font-syne font-bold text-xl tracking-tight text-[#F0F0E8] mb-3 group-hover:text-[#C0FF00] transition-colors">
//       {title}
//     </h3>
//     <p className="text-[#F0F0E8]/60 leading-relaxed font-space text-sm group-hover:text-[#F0F0E8] transition-colors">
//       {children}
//     </p>
//   </motion.div>
// );

// // --- MAIN COMPONENT ---

// const App = () => {
//   return (
//     <div className="min-h-screen bg-[#0F1F24] text-[#F0F0E8] font-space selection:bg-[#C0FF00] selection:text-[#0F1F24] overflow-x-hidden">
//       <style>{fonts}</style>

//       {/* ATMOSPHERIC BACKGROUNDS */}
//       <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
//          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#1E3A47]/40 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
//          <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-teal-900/30 blur-[150px] mix-blend-screen" />
//          {/* Grid overlay for technical feel */}
//          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
//       </div>

//       <NavBar />

//       {/* HERO SECTION */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Text Content */}
//         <motion.div 
//           className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
//             <span className="h-px w-12 bg-[#C0FF00]"></span>
//             <span className="text-[#C0FF00] font-space font-bold uppercase tracking-[0.2em] text-xs">
//               Kroma K-01 Apex
//             </span>
//           </motion.div>

//           <motion.h1 
//             variants={itemVariants} 
//             className="font-syne font-extrabold text-6xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0E8] to-[#94a3b8]"
//           >
//             SEE THE <br/>
//             WORLD <br/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0FF00] to-[#84cc16] filter drop-shadow-[0_0_15px_rgba(192,255,0,0.3)]">
//               LOUDER.
//             </span>
//           </motion.h1>

//           <motion.p variants={itemVariants} className="text-lg text-[#F0F0E8]/70 max-w-md leading-relaxed mb-10 font-space border-l-2 border-[#1E3A47] pl-6">
//              High-contrast polarized lenses encased in aerospace-grade acetate. Engineered for clarity, designed for impact.
//           </motion.p>

//           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
//             {/* Primary CTA */}
//             <a href="#shop" className="group relative inline-flex items-center gap-4 bg-[#C0FF00] text-[#0F1F24] px-8 py-4 font-syne font-bold text-lg tracking-wide overflow-hidden hover:shadow-[0_0_30px_rgba(192,255,0,0.4)] transition-shadow duration-300">
//               <span className="relative z-10">SHOP THE DROP</span>
//               <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
//             </a>
            
//             {/* Secondary CTA */}
//             <a href="#specs" className="text-[#F0F0E8] text-sm font-bold uppercase tracking-widest hover:text-[#C0FF00] transition-colors flex items-center gap-2 group">
//               View Specs <span className="block w-0 group-hover:w-4 h-px bg-[#C0FF00] transition-all"></span>
//             </a>
//           </motion.div>
           
//            {/* Social Proof */}
//           <motion.div variants={itemVariants} className="mt-16 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
//             <div className="flex -space-x-3">
//               {[1,2,3,4].map(i => (
//                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F1F24] bg-[#1E3A47] flex items-center justify-center overflow-hidden">
//                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" className="w-full h-full"/>
//                 </div>
//               ))}
//             </div>
//             <div className="flex flex-col">
//                 <div className="flex text-[#C0FF00] text-xs gap-1">
//                     <Sun className="w-3 h-3 fill-current"/>
//                     <Sun className="w-3 h-3 fill-current"/>
//                     <Sun className="w-3 h-3 fill-current"/>
//                     <Sun className="w-3 h-3 fill-current"/>
//                     <Sun className="w-3 h-3 fill-current"/>
//                 </div>
//                 <span className="text-xs font-space font-bold mt-1">TrustPilot 4.9/5</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Hero Image Section */}
//         <motion.div 
//           className="lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center order-1 lg:order-2"
//           initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
//           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         >
//             {/* Abstract circular glow behind product */}
//             <div className="absolute w-[500px] h-[500px] bg-[#C0FF00] rounded-full blur-[180px] opacity-20 animate-pulse" />
            
//             {/* PRODUCT IMAGE
//                 Replacing the placeholder with a styled representation of the user's request.
//                 The rotation and shadow adds to the "Cool Luxury" vibe.
//             */}
//             <motion.div 
//                 className="relative w-full h-full flex items-center justify-center z-10"
//                 whileHover={{ scale: 1.05, rotate: -2 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 {/* Using a high-quality unsplash fallback that closely matches the teal/sunglasses vibe if uploaded image fails or for general consistency in preview */}
//                 <img 
//                     src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=1000&auto=format&fit=crop" 
//                     alt="Kroma Sunglasses Apex Model" 
//                     className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
//                     style={{ 
//                         filter: "contrast(1.1) saturate(1.1)",
//                         maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
//                     }}
//                 />
                
//                 {/* Floating Tech Specs Card */}
//                 <motion.div 
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1.2, duration: 0.8 }}
//                     className="absolute bottom-12 right-0 md:-right-8 bg-[#0F1F24]/80 backdrop-blur-xl p-6 border border-[#1E3A47] max-w-xs rounded-none hidden md:block shadow-2xl"
//                 >
//                     <div className="flex justify-between items-center mb-2">
//                         <p className="font-syne font-bold text-xl text-[#F0F0E8]">K-01 "Apex"</p>
//                         <span className="bg-[#C0FF00] text-[#0F1F24] text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>
//                     </div>
//                     <p className="text-sm text-[#F0F0E8]/60 font-space mb-4">Deep Resin frame with polarized Volt™ Lenses.</p>
//                     <div className="flex gap-2 text-[#C0FF00] text-xs font-mono uppercase">
//                         <span className="border border-[#1E3A47] px-2 py-1">Polarized</span>
//                         <span className="border border-[#1E3A47] px-2 py-1">UVA/UVB</span>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//       </main>

//       {/* FEATURES SECTION */}
//       <section className="relative z-10 border-t border-[#1E3A47] bg-[#0F1F24] py-24 overflow-hidden" id="features">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//             <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
//             >
//                 <div>
//                     <h2 className="font-syne font-extrabold text-4xl md:text-5xl mb-2">TECHNICAL <span className="text-[#1E3A47]">MASTERY</span></h2>
//                     <p className="text-[#F0F0E8]/60 max-w-md">We don't just make sunglasses. We engineer optical instruments for the modern world.</p>
//                 </div>
//                 <button className="text-[#C0FF00] border-b border-[#C0FF00] pb-1 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors">
//                     View Full Specs
//                 </button>
//             </motion.div>

//             <motion.div 
//                 className="grid grid-cols-1 md:grid-cols-3 gap-8"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={containerVariants}
//             >
//                 <FeatureBlock number="01" title="Polarized Volt™" icon={<Sun size={20} strokeWidth={2.5} />}>
//                   Proprietary lens technology that enhances contrast while eliminating glare completely. See the world in HD.
//                 </FeatureBlock>
//                 <FeatureBlock number="02" title="Ballistic Acetate" icon={<Shield size={20} strokeWidth={2.5} />}>
//                   Frames crafted from high-impact acetate and machined aluminum hinges. Built to withstand the drop.
//                 </FeatureBlock>
//                 <FeatureBlock number="03" title="Precision Fit" icon={<Eye size={20} strokeWidth={2.5} />}>
//                   Engineered balance points ensure zero slipping, even during intense activity. Comfort meeting chaos.
//                 </FeatureBlock>
//             </motion.div>
//         </div>
//       </section>

//       {/* PRE-ORDER BANNER */}
//       <section className="relative py-32 bg-[#C0FF00] text-[#0F1F24] overflow-hidden flex items-center justify-center">
//           <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
//           <motion.div 
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative z-10 text-center px-6"
//           >
//              <h2 className="font-syne font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter mb-6">
//                 DROP 001
//              </h2>
//              <p className="font-space font-bold text-xl md:text-2xl mb-8 tracking-wide uppercase">
//                 Limited to 500 Units Worldwide
//              </p>
//              <button className="bg-[#0F1F24] text-[#F0F0E8] px-10 py-4 font-syne font-bold text-xl hover:scale-105 transition-transform">
//                 SECURE YOUR PAIR
//              </button>
//           </motion.div>
//       </section>

//        {/* FOOTER */}
//        <footer className="bg-[#050d0f] border-t border-[#1E3A47] pt-20 pb-10 px-6 md:px-12">
//            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
//                 <div className="col-span-1 md:col-span-2">
//                     <div className="font-syne font-extrabold text-2xl text-[#F0F0E8] mb-6">KROMA.</div>
//                     <p className="text-[#F0F0E8]/50 max-w-xs mb-8">
//                         Defining the future of optics through material science and aggressive design.
//                     </p>
//                     <div className="flex gap-4">
//                          <div className="w-10 h-10 bg-[#1E3A47] hover:bg-[#C0FF00] hover:text-[#0F1F24] transition-colors flex items-center justify-center rounded-full cursor-pointer">
//                             <span className="font-bold text-xs">IG</span>
//                          </div>
//                          <div className="w-10 h-10 bg-[#1E3A47] hover:bg-[#C0FF00] hover:text-[#0F1F24] transition-colors flex items-center justify-center rounded-full cursor-pointer">
//                             <span className="font-bold text-xs">TW</span>
//                          </div>
//                     </div>
//                 </div>
//                 <div>
//                     <h4 className="font-bold text-[#F0F0E8] mb-6 uppercase tracking-widest text-sm">Shop</h4>
//                     <ul className="space-y-4 text-[#F0F0E8]/60 text-sm">
//                         <li className="hover:text-[#C0FF00] cursor-pointer">All Sunglasses</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">New Arrivals</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">Accessories</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">Gift Cards</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="font-bold text-[#F0F0E8] mb-6 uppercase tracking-widest text-sm">Support</h4>
//                     <ul className="space-y-4 text-[#F0F0E8]/60 text-sm">
//                         <li className="hover:text-[#C0FF00] cursor-pointer">FAQ</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">Shipping & Returns</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">Warranty</li>
//                         <li className="hover:text-[#C0FF00] cursor-pointer">Contact Us</li>
//                     </ul>
//                 </div>
//            </div>
//            <div className="max-w-7xl mx-auto border-t border-[#1E3A47] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F0F0E8]/30 font-space uppercase">
//                 <p>© 2024 Kroma Optics. All rights reserved.</p>
//                 <div className="flex gap-8">
//                     <span>Privacy Policy</span>
//                     <span>Terms of Service</span>
//                 </div>
//            </div>
//        </footer>
//     </div>
//   );
// };

// export default App;