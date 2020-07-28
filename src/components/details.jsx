import React, { Component } from 'react';

class Detail extends Component {
    render() { 
        var name = this.props.val,
            newName = (name === "Wed") ? name + "nesday" : ((name === "Thu") ? name + "rsday" : ((name === "Sat") ? name + "urday" : name + "day")),
            today = new Date().toLocaleDateString();
        return (
            <React.Fragment>
                <h1><span>{newName}</span></h1>
                <h1><span>Forecast for</span> : {today}</h1>
                <img src = {this.props.image} className = "adjust" alt = "weather"/>
                <h2><span>Highest temperature</span> : {this.props.high}</h2>
                <h2><span>Lowest temperature</span> : {this.props.low}</h2>
                <h2><span>The weather is expected to be {this.props.type} today</span></h2>
            </React.Fragment>
        );
    }
}
 
export default Detail;