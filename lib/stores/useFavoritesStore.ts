import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type FavoritesStore = {
  favorites: string[]; 
  toggleFavorite: (id: string) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [], 
      
      toggleFavorite: (id: string) => set((state) => ({
        favorites: state.favorites.includes(id)
          ? state.favorites.filter((favId) => favId !== id)
          : [...state.favorites, id],
      })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);