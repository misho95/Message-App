import {create} from 'zustand';

type LangType = 'ge' | 'en';

type useLangType = {
  lang: LangType;
  changeLang: (value: LangType) => void;
};

export const useLang = create<useLangType>(set => ({
  lang: 'ge',
  changeLang: value => set(() => ({lang: value})),
}));

type useThemeType = {
  theme: 'light' | 'dark';
  setTheme: (value: 'light' | 'dark') => void;
  toggleTheme: () => void;
};

export const useTheme = create<useThemeType>(set => ({
  theme: 'light',
  setTheme: value => set(() => ({theme: value})),
  toggleTheme: () =>
    set(state => ({theme: state.theme === 'light' ? 'dark' : 'light'})),
}));
