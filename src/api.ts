import { QueryFunctionContext } from "@tanstack/react-query";

const BASE_URL = `https://disney_api.nomadcoders.workers.dev/`;

export async function fetchCharacterList() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}
export const getCharacter = async ({ queryKey }: QueryFunctionContext) => {
  const [_, id] = queryKey;
  return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
};
