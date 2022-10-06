import React, { Component } from "react";
import './navbar.css';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataParentToChild
    }
  }
  firstRun = false;

  componentDidMount() {
    if (this.firstRun === false) {
      console.log('hello');
      this.firstRun = true;
    }
  }

  handleClick = (e) => {
    this.props.parentCallback(e);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="navigation-bar">
        {data.map((title, index) => (
          <span id="nav-title" key={index} onClick={() => this.handleClick(index)}>
            {title}
          </span>
        ))}
      </div>
    );
  }
}

export default Navbar;
