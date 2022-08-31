import React, { Component } from "react";
import './navbar.css';

export class Navbar extends Component {

  

  constructor(props){
    super(props);
    this.state = {
      data: this.props.dataParentToChild
  }
}


 obj = 1;
 firstRun = false;

 componentDidMount() {
  if(this.firstRun === false) {
    console.log('hello');
    this.firstRun = true;
  }
}


  render() {
    const {data} = this.state;
   

    return (

    
     <div className="navigation-bar">
         
       {
          data.map(el => <option value={el} key={el}> {el} </option>)
       }

      </div>

      


      


    );
  }
}

export default Navbar;
