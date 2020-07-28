import React, { Component } from 'react';
import '../week.css';
import Day from './day';
import Correspond from './correspond';
import { weather } from '../data/weatherData';

class Week extends Component {
    state = {
        show : false,
        val : "default",
        imageName : "default",
        highTemp : "default",
        lowTemp : "default",
        type : "default"
    }

    constructor(props) {
        super(props);
        this.whichDay = this.whichDay.bind(this);
    }

    whichDay (butValue, imageName, one, two, weather) {
        this.setState({
            type : weather,
            imageName : imageName,
            highTemp : one,
            lowTemp : two,
            val : butValue,
            show : true }, function() {
               console.log(this.state); 
            }
        );
    } 

    render() { 
        return ( 
            <React.Fragment>
                <h1 className = "head">WEEKLY WEATHER FORECAST</h1>
                <div className = "flex-container">
                    {
                        weather.map((day) => { 
                            return (
                            <Day key = {day.day} type = {day.type} but = {day.day} image = {day.image} one = {day.one} two = {day.two} show = {this.state.show} val = {this.state.val} whichDay = {this.whichDay}/>); 
                        })
                    }
                </div>
            
                <div className = "container">
                    <Correspond val = {this.state.val} show = {this.state.show} image = {this.state.imageName} high = {this.state.highTemp} low = {this.state.lowTemp} type = {this.state.type}/>
                </div>                
            </React.Fragment>
        );
    }
}
 
export default Week;