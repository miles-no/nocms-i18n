import React from 'react';
import PropTypes from 'prop-types';
import dictionary from './dictionary';

const Internationalization = (props, context) => {
  return <span>{dictionary(props.children, context.lang)}</span>;
};

Internationalization.contextTypes = {
  lang: PropTypes.string,
};

Internationalization.propTypes = {
  children: PropTypes.node,
};

export default Internationalization;
