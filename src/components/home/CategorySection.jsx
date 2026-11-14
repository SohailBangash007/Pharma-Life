import { ArrowUpRight } from "lucide-react";
import { categories } from "../../data/store.js";
import { SectionHeading } from "../SectionHeading.jsx";

export function CategorySection({ navigate, setCategory }) {
  return <section className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
    <SectionHeading eyebrow="A GOOD PLACE TO START" title={<>What are you <span className="text-[#82987b]">looking for?</span></>} action="Shop everything" onAction={() => navigate("Shop")} />
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {categories.map(({ name, icon: Icon, note }, index) => <button key={name} onClick={() => { setCategory(name); navigate("Shop"); }} className="royal-category zoom-card group relative min-h-[180px] overflow-hidden rounded-3xl border p-5 text-left sm:min-h-[210px] sm:p-7">
        <span className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full border border-[#c2a266]/15" />
        <Icon size={22} strokeWidth={1.6} className="royal-accent mb-9 sm:mb-12" />
        <p className="font-display text-[16px] font-bold sm:text-xl">{name}</p><p className="mt-1 text-xs text-[#78847b]">{note}</p>
        <span className="royal-category-icon absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full"><ArrowUpRight size={15} /></span>
        <span className="royal-number absolute bottom-0 right-5 text-[110px] font-extrabold leading-none">{String(index + 1).padStart(2, "0")}</span>
      </button>)}
    </div>
  </section>;
}
