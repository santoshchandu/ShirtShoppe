import { PRODUCTS } from "@/lib/mockData";
import { useRoute } from "wouter";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function ProductDetails() {
  const [, params] = useRoute("/products/:id");
  const id = parseInt(params?.id || "0");
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();

  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [qty, setQty] = useState(1);

  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const handleAddToCart = () => {
    if (!size) return toast({ title: "Please select a size", variant: "destructive" });
    if (!color) return toast({ title: "Please select a color", variant: "destructive" });
    
    addToCart(product, size, color);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {/* Placeholder for thumbnails if multiple images */}
        </div>

        {/* Info */}
        <div className="space-y-8 pt-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-heading tracking-tight">{product.name}</h1>
            <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-6">
            {/* Color Selection */}
            <div className="space-y-3">
              <span className="text-sm font-bold">COLOR: {color}</span>
              <div className="flex gap-3">
                {product.colors.map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-10 px-4 border text-sm uppercase transition-all
                      ${color === c 
                        ? 'border-black bg-black text-white' 
                        : 'border-border hover:border-black/50'
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <span className="text-sm font-bold">SIZE: {size}</span>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-12 border text-sm font-medium transition-all
                      ${size === s 
                        ? 'border-black bg-black text-white' 
                        : 'border-border hover:border-black/50'
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full h-14 rounded-none text-lg uppercase tracking-widest"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            
            <div className="text-xs text-muted-foreground pt-4 border-t">
              <p>Free shipping on orders over $100.</p>
              <p>30-day return policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
