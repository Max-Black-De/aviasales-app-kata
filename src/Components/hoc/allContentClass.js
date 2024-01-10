import React from "react";
import PropTypes from 'prop-types';

const allContentClass = (Component, className) => {
  return (props) => {
    return(
      <div className={className}>
        <Component {...props}/>
      </div>
    )
  }
}

export default allContentClass

allContentClass.propTypes = {
    className: PropTypes.string.isRequired,
};