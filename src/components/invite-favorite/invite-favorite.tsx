import React from 'react';
import Link from 'next/link';
import { FaHeart, FaHome } from 'react-icons/fa';

const InviteToFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg mb-4">¡Agrega a tus favoritos!</p>
      <Link href="/" legacyBehavior>
        <a className="flex items-center justify-center text-blue-500 hover:text-blue-600">
          <FaHome className="mr-2" />
          Volver al inicio
        </a>
      </Link>
    </div>
  );
};

export default InviteToFavorites;
