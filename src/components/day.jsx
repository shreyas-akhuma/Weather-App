import React, { Component } from 'react';

class Day extends Component {
    render() { 
        console.log(this.props);
        return (
            <div className = "card">
                <div className = "card-body">
                    <h4 className = "card-title" align = "center">{this.props.but}</h4>
                    <p align = "center"><img src = {this.props.image} alt = "weather"/></p>
                    <p align = "center"><button type = "button" className = "btn btn-dark" onClick = {() => this.props.whichDay(this.props.but, this.props.image, this.props.one, this.props.two, this.props.type)}>Details</button></p>
                </div>
            </div>
        );
    }
}
 
export default Day;