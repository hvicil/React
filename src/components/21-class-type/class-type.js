import { Component } from "react";

export default class ClassTypeTest extends Component{

 constructor(props){
  super(props);

  this.state={
   hours:10,
   seconds:45
  }
 }


 render() {

 return
 <div>

  <h2>{this.state.hours}:{this.state.seconds}</h2>

 </div>

  
 }
}