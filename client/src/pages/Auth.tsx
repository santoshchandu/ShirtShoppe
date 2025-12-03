import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in a real app this would validate password
    login(email);
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md border-none shadow-none bg-secondary/30">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-heading tracking-wide">
            {isLogin ? "WELCOME BACK" : "CREATE ACCOUNT"}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {isLogin ? "Enter your details to access your account" : "Join the community for exclusive drops"}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="user@demo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <p className="text-xs text-muted-foreground">Tip: Use 'admin@demo.com' for admin access</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>

            <Button type="submit" className="w-full rounded-none uppercase tracking-wider">
              {isLogin ? "Sign In" : "Register"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
