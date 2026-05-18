export const WHATSAPP_NUMBER = "918460107287";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  category: string;
  isNew?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export const categories: Category[] = [
  {
    id: "oversized-tshirts",
    name: "Oversized T-Shirts",
    image: "/assets/generated/product-tshirt.dim_600x700.jpg",
    count: 24,
  },
  {
    id: "hoodies",
    name: "Hoodies",
    image: "/assets/generated/product-hoodie.dim_600x700.jpg",
    count: 18,
  },
  {
    id: "coord-sets",
    name: "Co-ord Sets",
    image: "/assets/generated/product-coord.dim_600x700.jpg",
    count: 15,
  },
  {
    id: "ethnic-wear",
    name: "Ethnic Wear",
    image: "/assets/generated/product-ethnic.dim_600x700.jpg",
    count: 20,
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    image: "/assets/generated/hero-fashion.dim_1920x1080.jpg",
    count: 12,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Shadow Drop Oversized Tee",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: "/assets/generated/product-tshirt.dim_600x700.jpg",
    category: "Oversized T-Shirts",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Urban Arch Hoodie",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: "/assets/generated/product-hoodie.dim_600x700.jpg",
    category: "Hoodies",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Noir Co-ord Set",
    price: 1899,
    originalPrice: 2999,
    discount: 37,
    image: "/assets/generated/product-coord.dim_600x700.jpg",
    category: "Co-ord Sets",
    badge: "TRENDING",
  },
  {
    id: 4,
    name: "Heritage Ethnic Kurta Set",
    price: 1299,
    originalPrice: 2199,
    discount: 41,
    image: "/assets/generated/product-ethnic.dim_600x700.jpg",
    category: "Ethnic Wear",
  },
  {
    id: 5,
    name: "Void Relaxed Tee",
    price: 649,
    originalPrice: 999,
    discount: 35,
    image: "/assets/generated/product-tshirt.dim_600x700.jpg",
    category: "Oversized T-Shirts",
    badge: "HOT",
  },
  {
    id: 6,
    name: "Street Arch Premium Hoodie",
    price: 1799,
    originalPrice: 2799,
    discount: 36,
    image: "/assets/generated/product-hoodie.dim_600x700.jpg",
    category: "Hoodies",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Minimal Monochrome Co-ord",
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    image: "/assets/generated/product-coord.dim_600x700.jpg",
    category: "Co-ord Sets",
  },
  {
    id: 8,
    name: "Luminary Bandhani Set",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    image: "/assets/generated/product-ethnic.dim_600x700.jpg",
    category: "Ethnic Wear",
    badge: "EXCLUSIVE",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/assets/generated/gallery-1.dim_500x500.jpg",
    alt: "Street style editorial",
  },
  {
    id: 2,
    src: "/assets/generated/gallery-2.dim_500x500.jpg",
    alt: "Co-ord set lookbook",
  },
  {
    id: 3,
    src: "/assets/generated/gallery-3.dim_500x500.jpg",
    alt: "Hoodie campaign",
  },
  {
    id: 4,
    src: "/assets/generated/gallery-4.dim_500x500.jpg",
    alt: "Fabric detail",
  },
  {
    id: 5,
    src: "/assets/generated/gallery-5.dim_500x500.jpg",
    alt: "Campaign duo",
  },
  {
    id: 6,
    src: "/assets/generated/about-brand.dim_800x600.jpg",
    alt: "Brand lifestyle",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Riya Sharma",
    location: "Mumbai, MH",
    rating: 5,
    review:
      "Absolutely obsessed with my noir co-ord set! The fabric quality is insane and I've got so many compliments at events. UrbanVibe is officially my go-to brand.",
    avatar: "RS",
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Ahmedabad, GJ",
    rating: 5,
    review:
      "Ordered the Urban Arch hoodie and it arrived in 2 days. Super premium fabric, fits perfectly. The WhatsApp ordering was incredibly smooth.",
    avatar: "AP",
  },
  {
    id: 3,
    name: "Priya Nair",
    location: "Bangalore, KA",
    rating: 5,
    review:
      "Finally found a brand that does ethnic wear with a modern streetwear edge. The Heritage Kurta Set is everything. Will definitely order more!",
    avatar: "PN",
  },
  {
    id: 4,
    name: "Karan Mehta",
    location: "Delhi, DL",
    rating: 5,
    review:
      "The oversized tees are next level quality. I've bought from many brands but UrbanVibe hits different — premium fabrics, trendy cuts, fast delivery.",
    avatar: "KM",
  },
];
