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
