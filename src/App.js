import React from 'react';
import PropTypes from "prop-types";

class App extends React.PureComponent {
  state ={
    isLoading : true,
    movies : []
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});

    }, 6000); // 6 sec
  // the way to cut off data? axios vs fetch.

  }
  render(){
    const{isLoading}=this.state; // important
    return(
      <div> 
        <h2>{isLoading ? "Loading..." : "We are ready"} </h2>
        
        
        
      
      </div>
    );

  }
}

 
export default App;

//import Potato from './Potato'; how to connect another file  


/* the way to make functiona and use it.
function Food( { fav ,picture, rating}){ // == as args, props.fav = {fav}. both of them indicate children
  console.log(fav)
  return(
    <div> 
      <h2> I am gorgeous { fav } </h2>
      <img src = {picture} alt ={fav}/> 
      <h3> rating : {rating} / 10.0  </h3>
    </div> 
    );
}*/

/* the way to check type.
Food.propTypes = { // Type check method
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}*/

/*
  render(){
    console.log("rendering");
    return(
      <div> 
      <h1> HI THERE </h1>
      <h2> Good day to go out </h2>
      <h3> U've seen dat {this.state.count}</h3>
      <button onClick = {this.add}> Add</button>
      <button onClick = {this.minus}> minus </button>
      
      <b> what a massed shit we got here?</b>
      
      </div>
      
    );
/*

  class App extends React.Component{ 
  add =()=> {
  console.log("add");
  //this.setState({count:this.state.count+1});
  this.setState(current => ({count:current.count+1}));

  <h3> U've seen dat {this.state.count}</h3>
  <button onClick = {this.add}> Add</button>
  <button onClick = {this.minus}> minus </button>
 */

 
