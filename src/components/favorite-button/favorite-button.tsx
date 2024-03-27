import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface FavoriteButtonProps {
  onClick:() => void
}
const FavoriteButton:React.FC<FavoriteButtonProps> = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="absolute right-0 top-0 z-20 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md flex items-center justify-center focus:outline-none"
      onClick={onClick}
    >
      <FaHeart className="mr-2" />
      {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
};

export default FavoriteButton;
