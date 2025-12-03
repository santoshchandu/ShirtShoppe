import { HERO_CONTENT, PRODUCTS } from "@/lib/mockData";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img 
            src={HERO_CONTENT.image} 
            alt="Hero" 
            className="h-full w-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-sm md:text-base font-medium tracking-[0.3em] mb-4 uppercase text-white/80">
              {HERO_CONTENT.subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading tracking-tighter leading-[0.9] mb-8">
              {HERO_CONTENT.title}
            </h1>
            <Link href="/products">
              <Button size="lg" className="rounded-none text-base px-8 py-6 h-auto bg-white text-black hover:bg-white/90">
                SHOP COLLECTION <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight">
            LATEST DROPS
          </h2>
          <Link href="/products">
            <span className="hidden md:inline-flex items-center text-sm font-bold border-b border-black pb-1 cursor-pointer hover:opacity-60 transition-opacity">
              VIEW ALL <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
          <Link href="/products">
            <Button variant="outline" className="w-full">VIEW ALL PRODUCTS</Button>
          </Link>
        </div>
      </section>

      {/* Brand Values / Banner */}
      <section className="bg-black text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading tracking-tighter mb-6">
            ESSENTIALS FOR THE MODERN ERA
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Crafted with premium heavyweight cottons and designed for the perfect oversized fit. 
            Quality that speaks for itself.
          </p>
        </div>
      </section>
    </div>
  );
}
