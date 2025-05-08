export interface Food {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string; // ✅ Add this missing property
  price: number;
  favorite: boolean;
  stars: number;
  origins: string[];
  tags: string[];
  cookTime: string;
}
