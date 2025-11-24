export const Footer = () => {
  return (
    <footer className="bg-[#050d0f] border-t border-[#1E3A47] pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="font-syne font-extrabold text-2xl text-[#F0F0E8] mb-4 md:mb-6">KROMA.</div>
          <p className="text-[#F0F0E8]/50 max-w-xs mb-6 md:mb-8 text-sm md:text-base">
            Defining the future of optics through material science and aggressive design.
          </p>
          <div className="flex gap-3 md:gap-4">
            <button
              className="w-10 h-10 md:w-11 md:h-11 bg-[#1E3A47] hover:bg-[#C0FF00] hover:text-[#0F1F24] transition-colors flex items-center justify-center rounded-full cursor-pointer"
              aria-label="Instagram"
            >
              <span className="font-bold text-xs">IG</span>
            </button>
            <button
              className="w-10 h-10 md:w-11 md:h-11 bg-[#1E3A47] hover:bg-[#C0FF00] hover:text-[#0F1F24] transition-colors flex items-center justify-center rounded-full cursor-pointer"
              aria-label="Twitter"
            >
              <span className="font-bold text-xs">TW</span>
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#F0F0E8] mb-4 md:mb-6 uppercase tracking-widest text-xs md:text-sm">Shop</h4>
          <ul className="space-y-3 md:space-y-4 text-[#F0F0E8]/60 text-sm">
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">All Sunglasses</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">New Arrivals</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">Accessories</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#F0F0E8] mb-4 md:mb-6 uppercase tracking-widest text-xs md:text-sm">Support</h4>
          <ul className="space-y-3 md:space-y-4 text-[#F0F0E8]/60 text-sm">
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">Shipping & Returns</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">Warranty</li>
            <li className="hover:text-[#C0FF00] cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#1E3A47] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F0F0E8]/30 font-space uppercase text-center md:text-left">
        <p>© 2024 Kroma Optics. All rights reserved.</p>
        <div className="flex gap-6 md:gap-8">
          <span className="cursor-pointer hover:text-[#C0FF00] transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-[#C0FF00] transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
