import React, { Component } from "react";
import './navbar.css';

export class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.dataParentToChild
  }
}


  render() {
    const {data} = this.state;

    return (
      <div className="navigation-bar">
          <span id="nav-el">{data}</span>

        
      </div>
    );
  }
}

export default Navbar;
