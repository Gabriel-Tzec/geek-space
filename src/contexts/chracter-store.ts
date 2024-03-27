import { CharacterProps } from "@/types/character";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ChracterStoreProps = {
  characters: CharacterProps[];
  getCharacter: (nombre: string) => void;
  addCharacter: (newCharacter: CharacterProps) => void;
  updateCharacter: (nombre: string) => void;
  removeCharacter: (nombre: string) => void;
};

const chracterStore = create<ChracterStoreProps>()(
  persist(
    (set) => ({
      characters: [],
      getCharacter: (nombre: string) => {},
      addCharacter: (newCharacter) => {
        return set((state) => ({
          characters: { ...state.characters, ...newCharacter },
        }));
      },

      updateCharacter: (nombre: string) => {},
      removeCharacter: () => {},
    }),
    {
      name: "chracter",
    }
  )
);

const useChracter = () => chracterStore();

export default useChracter;
