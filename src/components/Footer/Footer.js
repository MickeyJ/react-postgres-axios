import React from 'react'

export default props =>{
  const footStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    padding: '10px 0',
    borderTop: '1px solid #ccc'
  };
  return(
    <h5 style={footStyle}>
      &copy; 2015 {props.title}
    </h5>
  )
}