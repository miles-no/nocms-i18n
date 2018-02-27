import dictionaryDataStore from './dictionaryDataStore';

const dictionary = (phraseKey, lang) => {
  const i18n = dictionaryDataStore.getDictionary();

  if (!i18n[phraseKey] || !i18n[phraseKey][lang]) {
    return phraseKey;
  }

  return i18n[phraseKey][lang];
};

export default dictionary;
