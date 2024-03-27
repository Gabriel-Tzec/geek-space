import { httpClient } from "@/utilities/https";
import { CharacterProps } from "@/types/character";

export const characterApi = {
  findAll() {
    return httpClient.get("/characters").then((response) => response.data);
  },
  create(payload: CharacterProps) {
    return httpClient.post("/characters", { params: { ...payload } });
  },
  update(id: number, payload: CharacterProps) {
    return httpClient.put(`/characters/${id}`, { params: { ...payload } });
  },
  delete(id: number | null) {
    return httpClient.delete(`/characters/${id}`);
  },
};
 