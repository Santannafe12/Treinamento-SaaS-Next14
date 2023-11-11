export type products = ({
  author: {
    name: string;
  } | null;
} & {
  id: string;
  title: string;
  content: string;
  image: string | null;
  price: number | null;
  featured: boolean;
  createdAt: Date;
  authorId: string | null;
})[];

type product = ({
  author: {
    name: string;
  } | null;
} & {
  id: string;
  title: string;
  content: string;
  image: string | null;
  price: number | null;
  featured: boolean;
  createdAt: Date;
  authorId: string | null;
});

export type FeaturedProps = {
    featured: products;
}

export type OtherProductsProps = {
    otherProducts: products;
}

export type CardProps = {
    product: product;
}
