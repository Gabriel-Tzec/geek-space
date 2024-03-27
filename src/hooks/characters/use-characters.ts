import { characterApi } from "@/services/character";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CharacterProps } from "@/types/character";

// OBTENER PERSONAJE
export const useGetAllCharacter = () => {
  return useQuery({
    queryKey: ["get-characters"],
    queryFn: function () {
      return characterApi.findAll();
    },
  });
};

// AGREGAR UN PERSONAJE
export const useCreateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-character"],
    mutationFn: function (payload: CharacterProps) {
      return characterApi.create(payload);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-characters"] });
    },
  });
};

// ACTUALIZAR PERSONAJE
export const useUpdateCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-character"],
    mutationFn: function () {
      return new Promise((resolve, reject) => {
        resolve({});
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-characters"] });
    },
  });
};

// Eliminar Personaje
export const useDeleteCharacter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-character"],
    mutationFn: function (payload: number) {
      return characterApi.delete(payload);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["get-characters"] });
    },
  });
};
