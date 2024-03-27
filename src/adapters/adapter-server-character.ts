import { CharacterProps } from '@/types/character'; 

interface ServerCharacterData {
  id?: number | null;
  kind?: string;
  name?: string;
  description?: string;
  image?: string;
  species?: string;
  isFavorite?: boolean;
}

function adaptServerCharacter(serverData: ServerCharacterData): CharacterProps {
  const { id, kind, name, description, image, species, isFavorite } = serverData;
 
  return {
    id: id || null,
    kind: kind || '-',
    name: name || '-',
    description: description || '-',
    image: image || '-',
    species: species || '-',
    isFavorite: isFavorite || false
  };
}

export default adaptServerCharacter;