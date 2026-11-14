import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { imageUrl } from "../../data/store.js";

export function HeroSection({ navigate }) {
  return (
<section className="royal-hero relative mx-auto grid max-w-[1440px] gap-8 px-5 pb-14 pt-12 sm:px-8 md:min-h-[650px] md:grid-cols-[1.04fr_.96fr] md:items-center md:gap-8 md:px-12 md:pb-20 md:pt-14 lg:px-16">
      <div className="relative z-10 pb-2 md:pb-8">
        <div className="royal-kicker mb-7 inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[9px] font-bold tracking-[.2em]"><span className="h-1.5 w-1.5 rounded-full bg-[#c4a66a]" /> THOUGHTFUL CARE. BEAUTIFULLY SIMPLE.</div>
        <h1 className="font-display max-w-[660px] text-[52px] font-semibold leading-[1.02] tracking-[-3.8px] sm:text-[66px] md:text-[70px] lg:text-[82px]">Feel better.<br /><span className="royal-accent whitespace-nowrap font-serif text-[43px] font-medium italic tracking-[-2px] sm:text-[54px] md:text-[54px] lg:text-[64px]">Live beautifully.</span></h1>
        <p className="royal-copy mt-7 max-w-[440px] text-[15px] leading-7 sm:text-base">A more considered approach to everyday wellbeing. Discover trusted essentials, thoughtfully selected for the way you want to feel.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button onClick={() => navigate("Shop")} className="royal-button group flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold">Explore the collection <ArrowRight size={17} /></button>
          <button onClick={() => navigate("Wellness")} className="royal-secondary rounded-full px-5 py-3.5 text-sm font-semibold transition">Our philosophy <ArrowUpRight size={15} className="ml-1 inline" /></button>
        </div>
        <div className="mt-11 flex items-center gap-5">
          <div className="flex -space-x-2">{["photo-1534528741775-53994a69daeb", "photo-1500648767791-00dcc994a43e", "photo-1531123897727-8f129e1688ce"].map((id) => <img key={id} src={imageUrl(id, 80)} alt="" className="h-8 w-8 rounded-full border-2 border-[#101916] object-cover" />)}</div>
          <span className="h-7 w-px bg-[#bd9e63]/40" />
          <p className="royal-copy text-xs"><span className="royal-accent font-bold">4.9 / 5</span><br />Loved by 2,000+ customers</p>
        </div>
      </div>
      <div className="royal-media relative mx-auto w-full max-w-[590px] rounded-[30px] p-2 md:ml-auto">
        <div className="relative h-[390px] overflow-hidden rounded-[24px] sm:h-[500px] md:h-[540px]">
          <img src={imageUrl("photo-1576091160399-112ba8d25d1d", 1100)} alt="A healthcare professional offering thoughtful care" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08110e]/80 via-[#0c1712]/5 to-[#11190f]/10" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#111914]/65 px-3.5 py-2 text-[9px] font-semibold tracking-[.15em] text-white backdrop-blur-md sm:left-7 sm:top-7"><ShieldCheck size={14} className="text-[#d4b674]" /> TRUSTED, THOUGHTFUL WELLNESS</div>
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
            <p className="mb-2 text-[9px] font-bold tracking-[.19em] text-[#dfc78f]">THE MEDICAN EDIT</p>
            <p className="font-display max-w-sm text-2xl font-semibold leading-tight tracking-[-.7px] text-white sm:text-3xl">Everyday care,<br />with a little more meaning.</p>
          </div>
        </div>
        <div className="royal-seal absolute -right-2 top-10 flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full text-center shadow-lg sm:-right-4 sm:top-16">
          <Sparkles size={16} className="mb-1" />
          <span className="font-display text-[10px] font-bold leading-tight tracking-widest">CARE<br />CURATED</span>
        </div>
      </div>
    </section>
  );
}
