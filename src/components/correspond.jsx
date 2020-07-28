import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import Detail from './details';
import { hour } from '../data/hourData';

class Correspond extends Component {
    render() { 
        var show = this.props.show,
            val = this.props.val;
        if (show === true) {
            return (
                <React.Fragment>
                    <hr/>
                    <h2 className = "head">DETAILED  INFORMATION</h2>
                    <div className = "jumbotron">
                        <div className = "row">
                            <div className = "col-md-12 col-lg-6 detailed">
                                <Detail val = {val} high = {this.props.high} image = {this.props.image} low = {this.props.low} type = {this.props.type}></Detail>
                            </div>
                            <div className = "col-xs-12 col-lg-6">
                                <p align = "center"><LineChart 
                                    width = {400}
                                    height = {400}
                                    data = {hour[val]}
                                    xLabel = {"Time"}
                                    yLabel = {"Temp(F)"}
                                /></p>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (<div></div>);
        }
    }
}
 
export default Correspond;