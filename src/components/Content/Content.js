import React, { Component } from 'react'
import getMockData from '../../api/TeaAPI'

class Content extends Component{
  constructor(){
    super();
    this.state = { teas: [] }
  }
  componentDidMount(){
    getMockData().then(items =>{
      this.setState({
        teas: items[0].data.data
      })
    });
  }
  render(){
    return(
      <div className="container">
      {this.state.teas.map((item, idx) => (
        <ul className="list-group" instock={item.in_stock} key={idx}>
          <li className="list-group-item">{item.name}</li>
          <li className="list-group-item">{item.flavor}</li>
          <li className="list-group-item">{item.in_stock.toString()}</li>
        </ul>))}
      </div>
    )
  }
}
export default Content