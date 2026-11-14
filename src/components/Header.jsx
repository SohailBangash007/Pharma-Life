import { Cross, Leaf, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { navItems } from "../data/store.js";

export function Header({ page, navigate, cartCount, setCartOpen, setSearchOpen, searchOpen, searchTerm, setSearchTerm, mobileMenu, setMobileMenu, theme, setTheme }) {
  const activePage = page === "Product" ? "Shop" : page;

  return (
    <header className="royal-header relative z-30">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-12">
        <button onClick={() => navigate("Home")} className="royal-brand flex shrink-0 items-center gap-2.5" aria-label="Medican home">
          <span className="royal-logo-mark relative flex h-10 w-10 items-center justify-center rounded-[15px]"><Cross size={19} strokeWidth={2.3} /><Leaf size={9} className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[#101713] p-0.5 text-[#d7bd80]" /></span>
          <span className="flex flex-col items-start"><span className="font-display text-[21px] font-extrabold leading-none tracking-[-1.2px]">medican<span className="royal-accent">.</span></span><span className="mt-1 text-[7px] font-semibold tracking-[.2em] text-[#9a917b]">WELLNESS, REFINED</span></span>
        </button>
        <nav className="royal-nav hidden items-center gap-1 rounded-full p-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => <button key={item} onClick={() => navigate(item)} aria-current={activePage === item ? "page" : undefined} className="royal-nav-link rounded-full px-4 py-2.5 text-[12px] font-semibold">{item}</button>)}
        </nav>
        <div className="royal-actions flex shrink-0 items-center gap-1.5">
          <button onClick={() => setSearchOpen(!searchOpen)} className="royal-icon-button hidden h-10 w-10 items-center justify-center rounded-full sm:flex" aria-label="Search" title="Search"><Search size={17} /></button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="royal-icon-button flex h-10 w-10 items-center justify-center rounded-full" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setSearchOpen(!searchOpen)} className="royal-icon-button flex h-10 w-10 items-center justify-center rounded-full sm:hidden" aria-label="Search"><Search size={17} /></button>
          <button onClick={() => setCartOpen(true)} className="royal-bag-button relative flex h-10 items-center gap-2 rounded-full px-3.5 text-xs font-semibold" aria-label={`Shopping bag, ${cartCount} items`}>
            <ShoppingBag size={16} /><span className="hidden sm:inline">Bag</span>
            <span className="royal-bag-count absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[9px] font-bold">{cartCount}</span>
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="royal-icon-button ml-0.5 flex h-10 w-10 items-center justify-center rounded-full md:hidden" aria-label="Toggle menu">{mobileMenu ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {searchOpen && <div className="royal-search-panel border-t px-4 sm:px-7 lg:px-12">
          <div className="mx-auto flex max-w-[1360px] items-center gap-3 px-5 py-4 sm:px-8 lg:px-12"><Search size={18} className="text-[#7f9086]" /><input autoFocus value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") navigate("Shop"); }} placeholder="Search vitamins, pharmacy essentials..." className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa79f]" /><button onClick={() => { setSearchTerm(""); setSearchOpen(false); }} aria-label="Close search"><X size={18} /></button></div>
        </div>}
        {mobileMenu && <nav className="royal-mobile-nav grid grid-cols-2 gap-2 border-t px-4 py-4 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <button key={item} onClick={() => navigate(item)} aria-current={activePage === item ? "page" : undefined} className="royal-mobile-link rounded-xl px-4 py-3 text-left text-sm font-semibold">{item}</button>)}
        </nav>}
    </header>
  );
}
