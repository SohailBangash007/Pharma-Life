import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CircleHelp, FlaskConical, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { imageUrl } from "../data/store.js";
import { ProductCard } from "../components/ProductCard.jsx";

export function ProductPage({ product, products, navigate, onViewProduct, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 6);

  return <div className="product-detail-shell product-detail-glow relative isolate overflow-hidden">
    <div className="relative z-10 mx-auto max-w-[1360px] px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
      <button onClick={() => navigate("Shop")} className="product-back mb-7 inline-flex items-center gap-2 text-xs font-semibold tracking-wide"><ArrowLeft size={15} /> BACK TO THE COLLECTION</button>

      <section className="product-detail-layout grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <div className="product-detail-image zoom-card product-entry product-entry-image relative overflow-hidden rounded-[26px] border p-3 sm:rounded-[34px] sm:p-4">
          <div className={`relative aspect-[.92] overflow-hidden rounded-[19px] sm:rounded-[25px] ${product.color}`}>
            <img src={imageUrl(product.image, 1100)} alt={product.name} className="h-full w-full object-cover" />
            <span className="product-badge absolute left-4 top-4 rounded-full px-3 py-2 text-[9px] font-bold tracking-[.13em]">{product.badge}</span>
          </div>
          <div className="product-image-caption flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3"><span className="text-[10px] font-semibold tracking-wide">{product.category} · {product.detail}</span><span className="text-xs font-semibold text-[#d2b675]">MEDICAN EDIT</span></div>
        </div>

        <div className="product-entry product-entry-copy flex flex-col justify-center py-2 sm:py-5">
          <p className="text-[10px] font-bold tracking-[.2em] text-[#b39456]">{product.category.toUpperCase()} / EVERYDAY ESSENTIALS</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-[-1.8px] sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs"><span className="product-rating">★ 4.9</span><span className="product-rating-separator" /><span className="text-[#a6a79d]">Thoughtfully selected for your routine</span></div>
          <p className="mt-6 font-display text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#a6a79d]">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="product-info-card rounded-2xl border p-4">
              <div className="flex items-center gap-2 text-[#c8aa70]"><CircleHelp size={16} /><p className="text-[9px] font-bold tracking-[.16em]">WHAT IS IT FOR?</p></div>
              <p className="mt-3 text-xs leading-6 text-[#b9b8ad]">{product.use}</p>
            </div>
            <div className="product-info-card rounded-2xl border p-4">
              <div className="flex items-center gap-2 text-[#c8aa70]"><FlaskConical size={16} /><p className="text-[9px] font-bold tracking-[.16em]">FORMAT & HOW IT'S MADE</p></div>
              <p className="mt-3 text-xs font-semibold leading-5 text-[#e2d7ba]">{product.format}</p>
              <p className="mt-2 text-[11px] leading-5 text-[#9f9e94]">{product.made}</p>
            </div>
          </div>

          <div className="product-highlight-panel mt-6 rounded-2xl border p-5">
            <p className="mb-4 text-[9px] font-bold tracking-[.18em] text-[#b39456]">THE DETAILS</p>
            <ul className="space-y-3">{product.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2.5 text-xs leading-5 text-[#b9b8ad]"><Check size={15} className="mt-0.5 shrink-0 text-[#c8aa70]" />{highlight}</li>)}</ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="product-quantity flex h-12 items-center rounded-full border px-3">
              <button onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="flex h-8 w-8 items-center justify-center" aria-label="Decrease quantity"><Minus size={14} /></button>
              <span className="min-w-8 text-center text-sm font-semibold">{quantity}</span>
              <button onClick={() => setQuantity((current) => current + 1)} className="flex h-8 w-8 items-center justify-center" aria-label="Increase quantity"><Plus size={14} /></button>
            </div>
            <button onClick={() => addToCart(product, quantity)} className="royal-button flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold">Add to bag · ${(product.price * quantity).toFixed(2)} <ArrowRight size={16} /></button>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="product-service-card flex items-center gap-3 rounded-2xl border p-4"><Truck size={18} className="shrink-0 text-[#c8aa70]" /><div><p className="text-xs font-semibold">Careful delivery</p><p className="mt-1 text-[10px] text-[#9b9d92]">Free delivery over $40</p></div></div>
            <div className="product-service-card flex items-center gap-3 rounded-2xl border p-4"><ShieldCheck size={18} className="shrink-0 text-[#c8aa70]" /><div><p className="text-xs font-semibold">Know what you choose</p><p className="mt-1 text-[10px] text-[#9b9d92]">Always check the product label</p></div></div>
          </div>
          <p className="mt-5 text-[10px] leading-5 text-[#898c83]">Product page demo. This information is not medical advice. For medicines and supplements, verify the approved packaging and consult a qualified healthcare professional.</p>
        </div>
      </section>

      {relatedProducts.length > 0 && <section className="product-recommendations mt-16 border-t border-[#bca36d]/20 pt-10 sm:mt-20 sm:pt-12">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[9px] font-bold tracking-[.18em] text-[#b39456]">CURATED FOR YOUR NEXT DISCOVERY</p><h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Explore more from Medican.</h2><p className="mt-2 text-xs text-[#8f9288]">A few more thoughtful essentials to browse.</p></div><button onClick={() => navigate("Shop")} className="flex items-center gap-2 text-xs font-semibold text-[#c3a76f]">View all <ArrowRight size={14} /></button></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} addToCart={(selected) => addToCart(selected, 1)} onViewProduct={onViewProduct} />)}</div>
      </section>}
    </div>
  </div>;
}
