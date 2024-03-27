import { characterExternalApi } from "@/services/character-external";

import { useQuery } from "@tanstack/react-query";

export const useGetAllCharacterExternal = () => {
  return useQuery({
    queryKey: ["get-characters-external"],
    queryFn: function () {
      return characterExternalApi.findAll();
    },
  });
};
