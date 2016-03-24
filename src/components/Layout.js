import React, { Component } from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

export default (props) =>{
  return(
    <div>
      <Header  title={props.title} />
      <Content teas={props.teas} />
      <Footer  title={props.title} />
    </div>
  )
}