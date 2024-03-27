import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); 
  };

  const onClick = () => {
    const value = inputValue.trim();
    onSearch(value);
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
        value={inputValue}
        onChange={handleChange}
      />

      <button className="py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none" onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
