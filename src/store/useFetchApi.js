import { create } from "zustand";
import axios from "axios";

export const useFetchApi = create((set) => {
  return {
    characters: [],
    getCharacters: async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      set({ characters: data.results });
    },
  };
});

export const useFetchEpisodes = create((set) => {
  return {
    episodes: [],
    getEpisodes: async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      set({ episodes: data.results });
    },
  };
});
