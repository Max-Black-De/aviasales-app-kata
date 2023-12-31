import React from "react";

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