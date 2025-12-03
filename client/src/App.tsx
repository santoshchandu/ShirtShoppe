import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import ProductList from "@/pages/ProductList";
import ProductDetails from "@/pages/ProductDetails";
import CartPage from "@/pages/CartPage";
import Checkout from "@/pages/Checkout";
import Auth from "@/pages/Auth";
import AdminDashboard from "@/pages/AdminDashboard";
import UserProfile from "@/pages/UserProfile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/profile" component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
