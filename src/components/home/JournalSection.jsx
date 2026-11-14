import { ArrowRight } from "lucide-react";
import { imageUrl } from "../../data/store.js";
import { SectionHeading } from "../SectionHeading.jsx";

export function JournalSection({ navigate }) {
  const stories = [
    { title: "A gentler way to build a morning routine", tag: "SMALL RITUALS", image: "photo-1470252649378-9c29740c9fa8", time: "4 min read" },
    { title: "The feel-good guide to everyday immunity", tag: "GOOD TO KNOW", image: "photo-1543362906-acfc16c67564", time: "6 min read" },
    { title: "Making room for a little more rest", tag: "SLOW DOWN", image: "photo-1519823551278-64ac92734fb1", time: "3 min read" },
  ];
  return <section className="border-t border-[#e9ebe3] py-16 md:py-24"><div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="NOTES FROM THE FEEL-GOOD SIDE" title={<>A little good <span className="text-[#82987b]">to know.</span></>} action="Visit our journal" onAction={() => navigate("Wellness")} />
    <div className="mt-9 grid gap-5 md:grid-cols-3">{stories.map((story) => <button key={story.title} onClick={() => navigate("Wellness")} className="editorial-card group overflow-hidden rounded-[22px] border p-3 text-left sm:rounded-[26px] sm:p-4"><div className="editorial-image aspect-[1.5] overflow-hidden rounded-[15px] bg-[#e7eade]"><img src={imageUrl(story.image, 760)} alt="" loading="lazy" className="h-full w-full object-cover" /></div><div className="mt-4 flex items-center justify-between"><span className="royal-accent text-[9px] font-bold tracking-[.14em]">{story.tag}</span><span className="text-[10px] text-[#98a29a]">{story.time}</span></div><h3 className="mt-2 max-w-sm font-display text-lg font-bold leading-snug tracking-[-.4px]">{story.title}</h3><p className="mt-2 text-xs leading-5 text-[#849087]">Simple, thoughtful ideas to bring a little more care into your everyday routine.</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#ad925c]">Read story <ArrowRight size={13} /></span></button>)}</div>
  </div></section>;
}
