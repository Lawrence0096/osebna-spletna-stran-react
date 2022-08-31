import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: ['o meni, izobrazba']
    }
}

render(){
  const {data} = this.state;
  return(
    <Navbar dataParentToChild = {data}/>
  )
}




  





}

export default App;
