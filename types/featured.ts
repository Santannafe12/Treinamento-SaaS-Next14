export type Product = {
  id: string;
  title: string;
  content: string;
  image: Buffer;
  price: number;
  featured: boolean;
  createdAt: Date;
  author?: User;
  authorId?: string;
  categories: Category[];
}

type ProductArray = {
  products: {
      id: string;
      title: string;
      content: string;
      image: string;
      price: number;
      featured: boolean;
      createdAt: Date;
      authorId: string | null;
  }[];
}

export type productsTest2 = {
  products: ProductArray[]
  title: string
}

export type productsTest = {
  product: ProductArray
}

export type Category = {
  id: string;
  name: string;
  products: Product[];
}

export type categoria = {
  id: string;
  name: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

export type produto = {
  id: string;
  title: string;
  content: string;
  image: string;
  price: number;
  featured: boolean;
  createdAt: Date;
  authorId: string | null;
};

export type ProductProps2 = {
  product: produto;
};

export type ProductsProps = {
  // products: products;
  query: string
  currentPage: number;
};

export type OtherProductsProps = {
  otherProducts: Product;
  title: string;
};

export type CardProps = {
  product: Product;
};

export type usersProps = {
  // users: users;
  query: string
  currentPage: number;
};

type users = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}[];
