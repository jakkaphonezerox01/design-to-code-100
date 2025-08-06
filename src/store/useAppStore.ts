import { create } from 'zustand';

interface AppState {
  isDarkMode: boolean;
  searchResults: string[];
  recentSearches: string[];
  selectedArtwork: number | null;
  toggleDarkMode: () => void;
  addRecentSearch: (search: string) => void;
  removeRecentSearch: (search: string) => void;
  setSelectedArtwork: (index: number | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDarkMode: false,
  searchResults: [],
  recentSearches: [
    "Layla ascension material",
    "Layla build", 
    "Kalpalata lotus locations",
    "Layla cosplay",
    "Layla Wallpaper"
  ],
  selectedArtwork: null,

  toggleDarkMode: () => set((state) => {
    const newMode = !state.isDarkMode;
    // Apply dark mode to document
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { isDarkMode: newMode };
  }),

  addRecentSearch: (search: string) => set((state) => ({
    recentSearches: [search, ...state.recentSearches.filter(s => s !== search)].slice(0, 5)
  })),

  removeRecentSearch: (search: string) => set((state) => ({
    recentSearches: state.recentSearches.filter(s => s !== search)
  })),

  setSelectedArtwork: (index: number | null) => set({ selectedArtwork: index }),
}));