import { products } from "../../data/store.js";
import { ProductCard } from "../ProductCard.jsx";
import { SectionHeading } from "../SectionHeading.jsx";

export function FeaturedProductsSection({ addToCart, navigate, onViewProduct }) {
  return <section className="bg-[#eff1e9] py-16 md:py-24">
    <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><SectionHeading eyebrow="THE LITTLE THINGS THAT ADD UP" title={<>A few feel-good <span className="text-[#82987b]">favourites.</span></>} action="Shop all products" onAction={() => navigate("Shop")} />
      <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{products.slice(0, 4).map((product) => <ProductCard key={product.id} {...{ product, addToCart, onViewProduct }} />)}</div>
    </div>
  </section>;
}
