import { httpClientExternal } from "@/utilities/https";
import axios from "axios";

export const characterExternalApi = {
  findAll() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => response?.data);
      
  },
};
