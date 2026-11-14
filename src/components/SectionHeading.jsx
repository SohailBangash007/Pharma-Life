import { ArrowRight } from "lucide-react";

export function SectionHeading({ eyebrow, title, action, onAction }) {
  return <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
    <div><p className="mb-3 text-[10px] font-bold tracking-[.17em] text-[#78907e]">{eyebrow}</p><h2 className="font-display text-[32px] font-semibold leading-tight tracking-[-1.5px] sm:text-[42px]">{title}</h2></div>
    {action && <button onClick={onAction} className="group flex items-center gap-2 self-start text-sm font-semibold text-[#365e4c] sm:self-auto">{action}<ArrowRight size={16} /></button>}
  </div>;
}
