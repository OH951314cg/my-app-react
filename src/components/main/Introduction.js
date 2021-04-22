import React, { Component } from "react";

import "rsuite/dist/styles/rsuite-default.css";
import "./Introduction.css";
import { Grid, Row, Col, FlexboxGrid } from "rsuite";
import aboutUsImage from "../../assets/images/1.jpg";
import whiteSugar from "../../assets/images/whiteSugar.jpg";
import brownSugar from "../../assets/images/brownSugar.jpg";
import iceSugar from "../../assets/images/iceSugar.jpg";
import yellowSugar from "../../assets/images/yellowSugar.jpg";
import axios from "axios";

class Introduction extends Component {
  constructor() {
    super();
    this.state = {
      addressList: [],
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  componentDidMount() {
    this.httpCallExample();
  }


  //#region mouse focus and lose focus 
  onMouseEnterHandler(id) {
    let elmt = document.getElementsByClassName("imageContainer");
    for (var i = 0, all = elmt.length; i < all; i++) {
      if (elmt[i].id !== id) {
        elmt[i].style.opacity = "0.5";
      }
    }
    console.log("mouse enter");
  }

  onMouseLeaveHandler(id) {
    let elmt = document.getElementsByClassName("imageContainer");
    for (var i = 0, all = elmt.length; i < all; i++) {
      if (elmt[i].id !== id) {
        elmt[i].style.opacity = "1";
      }
    }
    console.log("mouse leave");
  }
  //#endregion

  //#region http call
  httpCallExample() {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        //this.state.addressList = response.data;
        this.setState({ addressList: response.data });
        console.log(this.state);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //#endregion

  render() {
    return (
      <>
        <section id="home">
          <Grid>
            <h1>公司名字</h1>
          </Grid>
        </section>
        <section id="about-us">
          <Grid>
            <Row>
              <Col xs={12} className="align-left">
                <img src={aboutUsImage} alt="about Us" />
              </Col>
              <Col xs={12}>
                <h3>关于我们</h3>
                <p>
                  [Line1]
                  <br />
                  [Line2]
                  <br />
                  [Line3]
                  <br />
                  [Line4]
                  <br />
                </p>
              </Col>
            </Row>
          </Grid>
        </section>
        <section id="product">
          <h2>我们的产品</h2>
          <Grid>
            <Row>
              <Col xs={6}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => this.onMouseEnterHandler("whiteSugar")}
                  onMouseLeave={() => this.onMouseLeaveHandler("whiteSugar")}
                  id="whiteSugar"
                >
                  <img src={whiteSugar} alt="White Sugar" className="image" />
                  <div className="imageText">
                    <div className="text">[产品]</div>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => this.onMouseEnterHandler("brownSugar")}
                  onMouseLeave={() => this.onMouseLeaveHandler("brownSugar")}
                  id="brownSugar"
                >
                  <img src={brownSugar} alt="Brown Sugar" className="image" />
                  <div className="imageText">
                    <div className="text">[产品]</div>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => this.onMouseEnterHandler("iceSugar")}
                  onMouseLeave={() => this.onMouseLeaveHandler("iceSugar")}
                  id="iceSugar"
                >
                  <img src={iceSugar} alt="Ice Sugar" className="image" />
                  <div className="imageText">
                    <div className="text">[产品]</div>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div
                  className="imageContainer"
                  onMouseEnter={() => this.onMouseEnterHandler("yellowSugar")}
                  onMouseLeave={() => this.onMouseLeaveHandler("yellowSugar")}
                  id="yellowSugar"
                >
                  <img src={yellowSugar} alt="Yellow Sugar" className="image" />
                  <div className="imageText">
                    <div className="text">[产品]</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
        <section id="address">
          <h2>我们的地址</h2>
          <FlexboxGrid justify="center">
            {this.state.addressList.map((address, key) =>
              key > 3 ? (
                <div></div>
              ) : (
                <FlexboxGrid.Item key={key}>
                  <div className="align-left margin-20">
                    <p>
                      名字：{address.login}
                      <br />
                      地址1：{address.type}
                      <br />
                      地址2：{address.avatar_url}
                      <br />
                      联系电话：982739874912
                    </p>
                  </div>
                </FlexboxGrid.Item>
              )
            )}
          </FlexboxGrid>
        </section>
      </>
    );
  }
}

export default Introduction;
