import { ArrowRight, Plus, ShieldCheck } from "lucide-react";
import { imageUrl } from "../data/store.js";

export function ProductCard({ product, addToCart, onViewProduct }) {
  function openProduct() {
    onViewProduct?.(product);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProduct();
    }
  }

  return <article role="link" tabIndex={0} onClick={openProduct} onKeyDown={handleKeyDown} aria-label={`View ${product.name} details`} className="product-card group min-w-0 cursor-pointer overflow-hidden rounded-[22px] border p-2.5 sm:rounded-[26px] sm:p-3">
    <div className={`product-image relative aspect-[.95] overflow-hidden rounded-[16px] ${product.color} sm:rounded-[20px]`}>
      <img src={imageUrl(product.image, 600)} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
      <span className="product-badge absolute left-3 top-3 rounded-full px-2.5 py-1.5 text-[8px] font-bold tracking-[.11em] backdrop-blur sm:left-4 sm:top-4 sm:text-[9px]">{product.badge}</span>
      <button onClick={(event) => { event.stopPropagation(); addToCart(product); }} aria-label={`Add ${product.name} to bag`} className="product-add absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full shadow-md sm:bottom-4 sm:right-4 sm:h-11 sm:w-11"><Plus size={19} /></button>
    </div>
    <div className="px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
      <div className="mb-2 flex items-center justify-between gap-2"><span className="royal-accent text-[9px] font-bold uppercase tracking-[.14em]">{product.category}</span><span className="product-rating text-[10px] font-semibold">★ 4.9</span></div>
      <div className="flex items-start justify-between gap-2"><div className="min-w-0"><p className="truncate font-display text-[13px] font-bold sm:text-[15px]">{product.name}</p><p className="mt-1.5 text-[10px] leading-5 text-[#849087] sm:text-xs">{product.detail}</p></div><span className="pt-0.5 text-xs font-bold sm:text-sm">${product.price.toFixed(2)}</span></div>
      <p className="mt-3 text-[10px] font-semibold text-[#b39456]">View product details <ArrowRight size={12} className="ml-1 inline" /></p>
      <div className="product-trust mt-4 flex items-center gap-2 border-t pt-3 text-[9px] font-medium tracking-wide"><ShieldCheck size={13} className="royal-accent" /> Thoughtfully selected</div>
    </div>
  </article>;
}
