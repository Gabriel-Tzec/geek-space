import { CharacterProps } from "@/types/character";
import Image from "next/image";
import FavoriteButton from "../favorite-button/favorite-button";
import Remove from "@/components/remove/remove";
import { Show } from "../show/show";

interface CardProps {
  character: CharacterProps;
  addFavorite: () => void;
  removeFavorite: () => void;
  isMain?: boolean;
}

const Card: React.FC<CardProps> = ({
  character,
  addFavorite,
  removeFavorite,
  isMain,
}) => {
  const { image, name, species } = character;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <Show condition={isMain}>
        <FavoriteButton onClick={addFavorite} />
      </Show>

      <Show condition={!isMain}>
        <Remove onClick={removeFavorite} />
      </Show>

      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{species}</p>
      </div>
    </div>
  );
};

export default Card;
