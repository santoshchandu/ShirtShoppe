import heroImage from '@assets/generated_images/urban_streetwear_hero_image_with_model.png';
import product1 from '@assets/generated_images/black_graphic_t-shirt_flat_lay.png';
import product2 from '@assets/generated_images/white_graphic_t-shirt_flat_lay.png';
import product3 from '@assets/generated_images/beige_oversized_t-shirt_flat_lay.png';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  inventory: number;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Order {
  id: string;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "ESSENTIAL OVERSIZED TEE // BLACK",
    description: "Heavyweight cotton jersey. Drop shoulder fit. Boxy cut. The quintessential streetwear staple.",
    price: 45.00,
    images: [product1],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    category: "T-Shirts",
    inventory: 50
  },
  {
    id: 2,
    name: "ABSTRACT GRAPHIC TEE // WHITE",
    description: "Premium soft-touch cotton. Screen printed back graphic. Relaxed fit for everyday wear.",
    price: 48.00,
    images: [product2],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    category: "Graphic Tees",
    inventory: 35
  },
  {
    id: 3,
    name: "CORE COLLECTION // BEIGE",
    description: "Earth tone essential. 280gsm heavyweight cotton. Ribbed collar. Pre-shrunk.",
    price: 42.00,
    images: [product3],
    sizes: ["M", "L", "XL"],
    colors: ["Beige"],
    category: "Basics",
    inventory: 20
  },
  {
    id: 4,
    name: "STREET LOGO TEE // CHARCOAL",
    description: "Vintage wash finish. Distressed hem details. Puff print logo on chest.",
    price: 55.00,
    images: [product1], // Reusing for mockup
    sizes: ["S", "M", "L"],
    colors: ["Charcoal"],
    category: "T-Shirts",
    inventory: 15
  },
  {
    id: 5,
    name: "LIMITED EDITION // NEON",
    description: "High visibility accent pieces. Technical fabric blend. Performance meets street.",
    price: 60.00,
    images: [product2], // Reusing for mockup
    sizes: ["L", "XL"],
    colors: ["Neon Green", "Black"],
    category: "Limited",
    inventory: 5
  }
];

export const HERO_CONTENT = {
  image: heroImage,
  title: "DEFINING THE NEW SILHOUETTE",
  subtitle: "SS25 COLLECTION OUT NOW"
};

export const MOCK_USERS: User[] = [
  { id: 1, name: "Demo User", email: "user@demo.com", role: "user" },
  { id: 2, name: "Admin User", email: "admin@demo.com", role: "admin" }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-7782-XJ",
    userId: 1,
    items: [
      { ...PRODUCTS[0], selectedSize: "L", selectedColor: "Black", quantity: 1 },
      { ...PRODUCTS[2], selectedSize: "M", selectedColor: "Beige", quantity: 2 }
    ],
    total: 129.00,
    status: "delivered",
    date: "2024-10-15"
  },
  {
    id: "ORD-9921-MC",
    userId: 1,
    items: [
      { ...PRODUCTS[1], selectedSize: "XL", selectedColor: "White", quantity: 1 }
    ],
    total: 48.00,
    status: "processing",
    date: "2024-12-02"
  }
];
