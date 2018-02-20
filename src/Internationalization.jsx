import React from 'react';
import PropTypes from 'prop-types';

const dictionary = (i18n, phraseKey, lang) => {
  if (!i18n[phraseKey] || !i18n[phraseKey][lang]) {
    return phraseKey;
  }

  return i18n[phraseKey][lang];
};

const Internationalization = (props, context) => {
  return <span>{dictionary(context.i18n, props.children, context.lang)}</span>;
};

Internationalization.contextTypes = {
  lang: PropTypes.string,
  i18n: PropTypes.object,
};

Internationalization.propTypes = {
  children: PropTypes.node,
};

export default Internationalization;
export { dictionary };
