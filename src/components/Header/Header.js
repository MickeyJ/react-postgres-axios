import React from 'react'

export default (props) =>{
  const headerStyle = {
    background: 'white',
    borderBottom: '1px solid #ccc'
  };
  return(
    <h1 style={headerStyle}>
      {props.title}
    </h1>
  )
}