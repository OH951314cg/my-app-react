import React, { Component } from "react";

import "rsuite/dist/styles/rsuite-default.css";
import { Nav } from "rsuite";
import "./Navbar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
    this.selectHandler = this.selectHandler.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeBackground);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeBackground);
  }

  selectHandler(activeKey) {
    let elmt = document.getElementById(activeKey);
    elmt?.scrollIntoView({ behavior: "smooth", inline: "end" });
  }

  changeBackground() {
    console.log(window.pageYOffset);
  }

  render() {
    return (
      <>
        <Nav className="sticky active">
          <Nav.Item eventKey="home" onSelect={this.selectHandler}>
            logo
          </Nav.Item>
          <Nav.Item eventKey="about-us" onSelect={this.selectHandler}>
            关于我们
          </Nav.Item>
          <Nav.Item eventKey="product" onSelect={this.selectHandler}>
            我们的产品
          </Nav.Item>
          <Nav.Item eventKey="address" onSelect={this.selectHandler}>
            联系我们
          </Nav.Item>
        </Nav>
      </>
    );
  }
}

export default NavBar;
