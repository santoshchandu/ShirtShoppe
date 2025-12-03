import { Navbar } from "./Navbar";
import { Toaster } from "@/components/ui/toaster";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-12 bg-secondary/50">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-heading text-lg">STREET</h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              Redefining urban aesthetics through premium materials and oversized silhouettes.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-4">SHOP</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>All Products</li>
              <li>New Arrivals</li>
              <li>Accessories</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-4">SUPPORT</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-4">NEWSLETTER</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-background border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold hover:opacity-90">
                JOIN
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          © 2025 STREET WEAR INC. ALL RIGHTS RESERVED.
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
