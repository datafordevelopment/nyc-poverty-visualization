"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import BarChart from 'react-bar-chart';
import _ from 'lodash';

//Benefits Programs Components
import Snap from './BenefitsPrograms/SNAP.react.js';
import SchoolFood from './BenefitsPrograms/SchoolFood.react.js';
import ACSChildCare from './BenefitsPrograms/ACSChildCare.react.js';



export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
    var defaultData = [_.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2)];
    this.state = { dataSet: defaultData, width: 500 };
    this.generateNewNumbers = this.generateNewNumbers.bind(this);
  }
  componentDidMount()  {
    var domNode = ReactDOM.findDOMNode(this);
    console.log(domNode);

    window.onresize = () => {
     this.setState({width: domNode.offsetWidth});
    };
  }
  handleBarClick(element, id){
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
  generateNewNumbers() {
    var newData = [_.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2)];
    this.setState({ dataSet: newData });
  }
  render(){
    const data = [
      {text: 'HEAP', value: 500, fill: 'purple' },
      {text: 'SNAP', value: 300, fill: 'green'},
      {text: 'Tax Refunds', value: 300, fill: 'green'},
      {text: 'WIC', value: 300, fill: 'green'},
      {text: 'Childcare', value: 300, fill: 'green'},
      {text: 'School Food', value: 300, fill: 'green'},
    ];
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    return(
      <div><BarChart 
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick }/>
      <p><a onClick={this.generateNewNumbers}>Generate new fake data</a></p></div>
    );
  }
}
