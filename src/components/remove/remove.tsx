import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface RemoveProps {
    onClick: () => void
}

const Remove:React.FC<RemoveProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-0 z-20 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <AiOutlineDelete className="mr-2" />
      Eliminar
    </button>
  );
};

export default Remove;