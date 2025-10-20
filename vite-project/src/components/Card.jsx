import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', ...rest }) => (
  <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`} {...rest}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
