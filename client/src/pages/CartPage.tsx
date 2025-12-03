import { useCart } from "@/context/CartContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-4xl font-heading">YOUR CART IS EMPTY</h1>
        <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Link href="/products">
          <Button size="lg" className="rounded-none px-8">START SHOPPING</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading mb-12">SHOPPING CART</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 py-6 border-b">
              <div className="w-24 h-32 bg-secondary shrink-0">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading text-lg">{item.name}</h3>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Size: {item.selectedSize}</p>
                  <p>Color: {item.selectedColor}</p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center border border-border">
                    <button 
                      className="p-2 hover:bg-secondary"
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      className="p-2 hover:bg-secondary"
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-secondary/30 p-8 space-y-6 sticky top-24">
            <h3 className="font-heading text-xl">ORDER SUMMARY</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <Link href="/checkout">
              <Button className="w-full h-12 rounded-none text-base uppercase tracking-wider">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
