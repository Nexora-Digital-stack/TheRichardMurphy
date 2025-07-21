export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'oxford' | 'loafer' | 'boot' | 'sneaker';
  sizes: number[];
  colors: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}