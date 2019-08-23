// npm, npx, npm install axios, ...
// npm start // npm i gh-pages

// when homepage upload -> npm run build.   

import React from 'react';
import axios from 'axios';
import Movie from './movies';
import "./App.css";

//import PropTypes from "prop-types";

class App extends React.Component {
  state ={
    isLoading : true,
    movies : []
  };
  getMovies = async () => { // asynch & await. work together. 
    const {
      data : {
        data: {movies}
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); 
    this.setState({movies, isLoading : false});
    
    console.log(movies); 
  };  

  componentDidMount(){ // with async com~~, it will wait till ends.
    this.getMovies(); 
    
  // the way to cut off data? axios vs fetch.

  }
  render(){
    const{isLoading,movies}=this.state; // important
    return(
      <section className = "container"> 
        {isLoading 
        ? <div className = "loader">
          <span className = 'loader__text'> Loading... </span>
        </div> 
        : <div className = "movies">
        {movies.map(movie=>(
          <Movie
            key ={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres = {movie.genres}
            />
            ))}
          </div>
      }

      </section>
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

 /* way to set time out.
 setTimeout(()=>{
      this.setState({isLoading:false});
      }, 3000); 
 */
