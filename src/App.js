import React, { Component } from 'react'
import "./App.css";
import data from "./data";
import Reels from "./Reels/Reels";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data,
     
    };
  }
  render() {
    const {collections}=this.state;
    return (
      <div className="App">
        <h1>WELCOME TO THE INSTAGRAM PAGE</h1>
          {
              collections.map(({id, ...otherCollectionProps})=>
              (
                  <Reels key={id} {...otherCollectionProps} />
              ))
          }
    
      </div>
    );
  }
}


