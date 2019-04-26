import React from 'react';

export class  Weather extends React.Component{
    render(){
        return (
            <div>
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.humidity}
                {this.props.description}
            </div>
        );
    }
}