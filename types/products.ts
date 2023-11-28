import { Categorie } from "./categories";

export type Product = {
  id: string;
  title: string;
  content: string;
  image: string;
  price: number;
  featured: boolean;
  createdAt: Date;
  categories: Categorie[];
};

export type ProductProps = {
  product: Product;
};

export type ProductsProps = {
  products: Product[];
};
