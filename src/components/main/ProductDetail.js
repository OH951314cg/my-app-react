import React, { Component } from "react";
import styled from 'styled-components';
import './ProductDetail.css'

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteSugar:{
        name: "白砂糖",
        description:"白砂糖是食糖的一种。其颗粒为结晶状，均匀，颜色洁白，甜味纯正，甜度稍低于红糖。烹调中常用。适当食用白糖有补中益气、和胃润肺、养阴止汗的功效",
        ingredient: '甘蔗，甜菜'
      },
      brownSugar:{
        name: "赤砂糖",
        description:"赤砂糖，晶粒较大，晶面明显，色泽有红褐、赤红、青褐、黄褐等，无明显黑点。食时有浓甜的焦苦味，水分和还原糖比较多，浅者质量较好。赤砂糖在人们的日常膳食中是必不可少的调味品之一色，可食用，也可作调味料。",
        ingredient: '甘蔗'
      },
      iceSugar:{
        name: "冰糖",
        description:"冰糖是白砂糖煎炼而成的冰块状结晶，是由蔗糖加上蛋白质原料配方，经再溶、洁净处理后重结晶而制得的大颗粒结晶糖，有单晶体和多晶体两种，呈透明或半透明状。",
        ingredient: '甘蔗'
      },
      yellowSugar:{
        name: "黄糖",
        description:"黄糖采用的原料是甘蔗，含有95%左右的蔗糖，传统的方法是将收割下来的甘蔗经过切碎碾压，压出来的汁液先去除泥土、细菌、纤维等杂质，接着以小火熬煮5～6小时，不断搅拌让水份慢慢的蒸发掉，使糖的浓度逐渐增高，高浓度的糖浆在冷却后会凝固成为固体块状的粗糖，也就是黄糖砖。",
        ingredient: '甘蔗'
      }
    };
  }
  render() { 
    let returnData;
    switch (this.props.id){
      case 'whiteSugar': 
        returnData = this.state.whiteSugar;
        break;
      case 'brownSugar': 
        returnData = this.state.brownSugar;
        break;
      case 'iceSugar': 
        returnData = this.state.iceSugar;
        break;
      case 'yellowSugar': 
        returnData = this.state.yellowSugar;
        break;
      default:
        break;
    }
    
    return (
      this.props.id != null ?  
      <div className='productDetail'>
        <p style={{margin:'10px'}}>
          产品名：{returnData.name}<br/>
          介绍：{returnData.description}<br/>
          原料：{returnData.ingredient}<br/>
        </p>
      </div>
      :
      <></>
    );
  }
}

 
export default ProductDetail;