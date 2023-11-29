export type QueryAndCurrentPage = {
  query: string;
  currentPage: number;
  order?: string
  itemsPerPage?: number
};

type SortType = "1" | "2" | "3" | "4" | "5";

export type FilterOptions = {
  query: string;
  currentPage: number;
  itemsPerPage: number;
  sortType: SortType;
}
