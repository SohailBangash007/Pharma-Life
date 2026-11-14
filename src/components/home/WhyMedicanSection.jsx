import { BadgeCheck, Stethoscope, Truck } from "lucide-react";

export function WhyMedicanSection() {
  const points = [
    { icon: BadgeCheck, title: "Good stuff, no guesswork", text: "Thoughtfully chosen essentials with ingredients you can feel good about." },
    { icon: Stethoscope, title: "Real people, real care", text: "Our friendly care team is here when you need a hand or a little advice." },
    { icon: Truck, title: "Care, at your door", text: "Easy ordering and carefully packed delivery, straight to your doorstep." },
  ];
  return <section className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-24 lg:px-12">
    <div><p className="mb-3 text-[10px] font-bold tracking-[.17em] text-[#78907e]">WHY MEDICAN</p><h2 className="font-display text-[36px] font-semibold leading-[1.08] tracking-[-1.8px] sm:text-5xl">A little more <span className="text-[#82987b]">human.</span><br />A lot more you.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-[#78847b]">Healthcare can feel complicated. We’re here to make the everyday parts feel simple, friendly, and a little brighter.</p></div>
    <div className="divide-y divide-[#e3e8df]">{points.map(({ icon: Icon, title, text }, i) => <div key={title} className="flex gap-4 py-5 first:pt-0 last:pb-0 sm:gap-6"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9efdf] text-[#537360]"><Icon size={20} strokeWidth={1.6} /></span><div><div className="flex items-center gap-3"><span className="text-[10px] font-bold tracking-widest text-[#9baa8f]">0{i + 1}</span><h3 className="font-display text-base font-bold">{title}</h3></div><p className="mt-1 text-sm leading-6 text-[#7b8980]">{text}</p></div></div>)}</div>
  </section>;
}
