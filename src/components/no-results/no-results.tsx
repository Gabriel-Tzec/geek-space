import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const NoResults = () => {
  return (
    <div className="flex items-center justify-center">
      <FaExclamationCircle className="text-gray-500 text-4xl mr-2" />
      <p className="text-xl font-semibold text-gray-500">
        No se encontraron resultados.
      </p>
    </div>
  );
};

export default NoResults;
