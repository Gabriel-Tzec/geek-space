export interface CharacterProps {
  id?: number | null;
  kind: string;
  name: string;
  description: string;
  image: string;
  species?: string;
  isFavorite: boolean;
}
