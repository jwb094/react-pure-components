import React, {Component,PureComponent}from 'react';
import logo from './logo.svg';
import './App.css';


const Temp = (props)=>{
  console.log('render Temp');
return(<div>{props.val}</div>)


}


class App extends PureComponent{

state ={
  val:1
}
/**
 * Pure Components do not depend or modify the state of variables outside their scope. These are the building blocks of Functional Programming. 
 */
  componentDidMount(){
    setInterval(() => {
      this.setState(()=>{
    return {val:1}
      })
    },2000);
  }
  // shouldComponentUpdate(nextProps,nextstate){
  //   console.log('nextProps',nextstate);
  //   console.log('currentstate',this.state);
  //   return(this.state === nextstate ? false : true);
  //   }
  render(){
    console.log('render app');
    return (
      <div className="App">
      <Temp val={this.state.val}/>
      </div>
    );
  }

}

export default App;
