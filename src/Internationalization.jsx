import React from 'react';
import PropTypes from 'prop-types';
import dictionary from './dictionary';

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

