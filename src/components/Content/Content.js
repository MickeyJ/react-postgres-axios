import React, { Component } from 'react'
import getMockData from '../../api/Api'


export default class Content extends Component{
  constructor(){
    super();
    this.state = { teas: [] }
  }
  componentDidMount(){
    getMockData().then(data =>{
      this.setState({
        teas: data[0].data.data
      })
    });
  }
  render(){
    return(
      <div className="container">
        <ul className="list-group">
          {this.state.teas.map((item, idx) => (
            <li className="list-group-item" key={idx}>
              {item.name}
            </li>)
          )}
        </ul>
      </div>
    )
  }
}