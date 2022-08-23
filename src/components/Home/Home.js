import React from 'react';
import './Home.css';
import img from './meme.jpg'

const Home = () => (
  <div className="text-center m-2">
    <h1>Home</h1>
    <img className= "p-3" src={img} alt="memas"/>
  </div>
);

export default Home;
