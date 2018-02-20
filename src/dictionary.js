const dictionary = (i18n, phraseKey, lang) => {
  if (!i18n[phraseKey] || !i18n[phraseKey][lang]) {
    return phraseKey;
  }

  return i18n[phraseKey][lang];
};

export default dictionary;
