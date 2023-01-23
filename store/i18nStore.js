import axios from 'axios';
import { defineStore } from 'pinia';
import { useLanguageFilterStore } from './languageFilterStore';

export const useI18nStore = defineStore({
  id: 'i18nStore',
  state: () => {
    return { translations: {} };
  },
  actions: {
    async fetch() {
      try {
        const { data } = await axios.get(
          'https://dev.api.logicpower.ua/user/shared/export/translations',
        );

        console.log(
          `Translations fetched. Total item(s): ${Object.keys(data).length}`,
        );

        const result = { ru: {}, uk: {} };

        for (let key in data) {
          result.ru[key] = data[key].ru;
          result.uk[key] = data[key].uk;
        }

        this.translations = result;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getTranslationsByLang: (state) => {
      return (lang) => state.translations[lang];
    },
    getTranslationByLangAndKey: (state) => {
      const lang = useLanguageFilterStore().currentLanguage;

      return (key) => {
        if (state.translations[lang][key] === undefined) return key;
        return state.translations[lang][key];
      };
    },
  },
});
