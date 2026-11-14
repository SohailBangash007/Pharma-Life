import { Cross, Leaf, ShieldCheck } from "lucide-react";

export function Footer({ navigate }) {
  return <footer className="bg-[#193f34] text-white">
    <div className="mx-auto max-w-[1360px] px-5 pb-8 pt-12 sm:px-8 md:pt-16 lg:px-12">
      <div className="grid gap-9 border-b border-white/15 pb-10 sm:grid-cols-2 md:grid-cols-[1.5fr_.8fr_.8fr_1.1fr]">
        <div><button onClick={() => navigate("Home")} className="flex items-center gap-2.5"><span className="royal-logo-mark relative flex h-10 w-10 items-center justify-center rounded-[15px]"><Cross size={19} strokeWidth={2.3} /><Leaf size={9} className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[#101713] p-0.5 text-[#d7bd80]" /></span><span className="flex flex-col items-start"><span className="font-display text-[22px] font-extrabold leading-none tracking-[-1.2px]">medican<span className="royal-accent">.</span></span><span className="mt-1 text-[8px] font-semibold tracking-[.2em] text-white/45">WELLNESS, REFINED</span></span></button><p className="mt-4 max-w-xs text-xs leading-6 text-white/60">A little friendlier place for the everyday essentials that help you feel more like you.</p></div>
        <div><p className="mb-4 text-[10px] font-bold tracking-[.16em] text-[#b5ce92]">COME ON IN</p>{["Shop", "Wellness", "About"].map((item) => <button key={item} onClick={() => navigate(item)} className="mb-3 block text-sm text-white/70 transition hover:text-white">{item}</button>)}</div>
        <div><p className="mb-4 text-[10px] font-bold tracking-[.16em] text-[#b5ce92]">WE’RE HERE</p>{["Contact", "FAQs", "Shipping & returns"].map((item) => <button key={item} onClick={() => navigate(item === "Contact" ? "Contact" : "Wellness")} className="mb-3 block text-sm text-white/70 transition hover:text-white">{item}</button>)}</div>
        <div><p className="mb-4 text-[10px] font-bold tracking-[.16em] text-[#b5ce92]">A LITTLE REMINDER</p><p className="text-xs leading-6 text-white/60">Our products are here to support your wellbeing, not replace advice from a qualified healthcare professional.</p></div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-5 text-[10px] text-white/50 sm:flex-row sm:items-center"><span>© 2025 Medican Health Co. Made with a little more care.</span><span className="flex items-center gap-2"><ShieldCheck size={13} /> Your health, your way.</span></div>
    </div>
  </footer>;
}
