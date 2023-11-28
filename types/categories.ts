export type Categorie = {
  id: string;
  name: string;
} | null;

export type CategorieProps = {
  categorie: Categorie;
};

export type CategoriesProps = {
  categories: Categorie[];
};
