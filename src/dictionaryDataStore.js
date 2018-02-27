const i18n = {};

export default {
  setDictionary: (dictionary) => {
    Object.assign(i18n, dictionary);
  },
  getDictionary: () => { return i18n; },
};
