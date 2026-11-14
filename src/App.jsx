import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { products } from "./data/store.js";
import { Header } from "./components/Header.jsx";
import { CartDrawer } from "./components/CartDrawer.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ShopPage } from "./pages/ShopPage.jsx";
import { WellnessPage } from "./pages/WellnessPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";

function App() {
  const [page, setPage] = useState("Home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("medican-theme") || "dark");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [notice, setNotice] = useState("");

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("medican-theme", theme);
  }, [theme]);

  function showNotice(message) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }

  function navigate(nextPage) {
    setPage(nextPage);
    setMobileMenu(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function addToCart(product) {
    addItemsToCart(product, 1);
  }

  function addItemsToCart(product, quantity) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);
      return found
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
        : [...current, { ...product, quantity }];
    });
    showNotice(`${product.name} added to your bag`);
  }

  function openProduct(product) {
    setSelectedProduct(product);
    navigate("Product");
  }

  function changeQuantity(id, amount) {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter((item) => item.quantity > 0));
  }

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, searchTerm]);

  return (
    <div data-theme={theme} className="min-h-screen overflow-hidden bg-[#f7f8f2] text-[#173c32]">
      <div className="royal-promo px-4 py-2.5 text-center text-[10px] font-semibold tracking-[.17em] text-white sm:text-[11px]">
        A LITTLE GOOD NEWS: FREE DELIVERY ON YOUR FIRST ORDER OVER $40 <span className="ml-1">✳</span>
      </div>
      <Header {...{ page, navigate, cartCount, setCartOpen, setSearchOpen, searchOpen, searchTerm, setSearchTerm, mobileMenu, setMobileMenu, theme, setTheme }} />
      <main>
        {page === "Home" && <HomePage {...{ navigate, addToCart, setCategory, onViewProduct: openProduct }} />}
        {page === "Shop" && <ShopPage {...{ visibleProducts, category, setCategory, addToCart, searchTerm, setSearchTerm, onViewProduct: openProduct }} />}
        {page === "Wellness" && <WellnessPage {...{ navigate }} />}
        {page === "About" && <AboutPage {...{ navigate }} />}
        {page === "Contact" && <ContactPage {...{ showNotice }} />}
        {page === "Product" && selectedProduct && <ProductPage key={selectedProduct.id} product={selectedProduct} products={products} {...{ navigate, onViewProduct: openProduct, addToCart: addItemsToCart }} />}
      </main>
      <Footer {...{ navigate }} />
      {cartOpen && <CartDrawer {...{ cart, subtotal, changeQuantity, setCartOpen, showNotice }} />}
      {notice && <div className="fixed bottom-5 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1d4e40] px-5 py-3 text-sm font-medium text-white shadow-xl">
          <Check size={16} /> {notice}
        </div>}
    </div>
  );
}

export default App;
