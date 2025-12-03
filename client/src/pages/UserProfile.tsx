import { useAuth } from "@/context/AuthContext";
import { MOCK_ORDERS } from "@/lib/mockData";
import { useLocation } from "wouter";

export default function UserProfile() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  if (!user) {
    setLocation("/auth");
    return null;
  }

  const myOrders = MOCK_ORDERS.filter(o => o.userId === user.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-heading">MY PROFILE</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight border-b pb-4">ORDER HISTORY</h2>
          
          {myOrders.length === 0 ? (
            <p className="text-muted-foreground">No orders found.</p>
          ) : (
            <div className="space-y-4">
              {myOrders.map(order => (
                <div key={order.id} className="border p-6 space-y-4">
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <p className="font-bold">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`
                      }>
                        {order.status}
                      </span>
                      <p className="font-bold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span>{item.name} ({item.selectedSize}) x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
