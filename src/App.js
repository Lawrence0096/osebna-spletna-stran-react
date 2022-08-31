import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

import React, { Component } from 'react';
import CvSplitCover from './components/cv-split-cover/cv-split-cover';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: ['O meni', 'Izobrazba in izkušnje', 'Znanja in jeziki', 'Praktični izdelki' ]
    }
}



render(){
  const {data} = this.state;
 return(
    <Navbar dataParentToChild = {data}/>
    <CvSplitCover />
  )
}
}

export default App;
