import { Link, useLocation } from "wouter";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link href="/" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${location === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
        HOME
      </Link>
      <Link href="/products" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${location === '/products' ? 'text-primary' : 'text-muted-foreground'}`}>
        SHOP
      </Link>
      {user && (
        <Link href="/profile" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${location === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}>
          PROFILE
        </Link>
      )}
      {user?.role === 'admin' && (
        <Link href="/admin" className={`text-sm font-medium tracking-wide text-destructive hover:text-destructive/80 transition-colors ${location === '/admin' ? 'underline' : ''}`}>
          ADMIN
        </Link>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="font-heading text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          STREET<span className="text-xs align-top ml-1 font-sans font-normal tracking-widest text-muted-foreground">EST.2025</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {user ? (
             <Button variant="ghost" size="sm" onClick={logout} className="hidden md:flex text-xs">
               LOGOUT
             </Button>
          ) : (
            <Link href="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
