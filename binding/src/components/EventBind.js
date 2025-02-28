import React, { Component } from 'react'

class EventBind extends Component {
constructor(props) {
  super(props)

  this.state = {
     message: 'hello'
  }
  this.clickHandler = this.clickHandler.bind(this)

}
clickHandler(){
    this.setState({
        message: 'goodbye!'
    })
    console.log(this);
    
}
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>click</button>  first apro*/}
        {/*<button onClick={()=>this.clickHandler()}>click</button> second apro*/}
        <button onClick={this.clickHandler}>click</button>
        <div>hii</div> 
        <div>hii</div>
      </div>
    )
  }
}

export default EventBind
