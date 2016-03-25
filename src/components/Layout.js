import React from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

export default props =>{
  return(
    <div>
      <Header title={props.title} />
      <Content />
      <Footer title={props.title} />
    </div>
  )
}