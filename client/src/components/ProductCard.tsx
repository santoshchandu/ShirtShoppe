import { Link } from "wouter";
import { Product } from "@/lib/mockData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="group cursor-pointer space-y-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.inventory < 10 && (
              <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                Low Stock
              </div>
            )}
          </div>
          <div className="space-y-1">
            <h3 className="font-heading text-lg leading-none group-hover:underline decoration-1 underline-offset-4">
              {product.name}
            </h3>
            <div className="flex justify-between items-baseline">
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <p className="font-medium text-sm">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
