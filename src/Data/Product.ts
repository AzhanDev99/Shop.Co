export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "men" | "women" | "children";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 1200,
    image: "/images/mens-tshirt.jpg",
    category: "men",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 2500,
    image: "/images/womens-dress.jpg",
    category: "women",
  },
  {
    id: 3,
    name: "Children's Shoes",
    price: 1800,
    image: "/images/kids-shoes.jpg",
    category: "children",
  },
];
