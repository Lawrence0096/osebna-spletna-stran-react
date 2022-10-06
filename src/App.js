import './App.css';
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: ['O meni', 'Izobrazba in izkušnje', 'Znanja in jeziki', 'Praktični izdelki' ]
    }
}

handleCallback = (childData) =>{
  console.log(childData)
}


render(){
  const {data} = this.state;
 return(
    <div>
      <Navbar parentCallback = {this.handleCallback} dataParentToChild = {data}/>
      <Header/>
    </div>
    
  )
}
}

export default App;
