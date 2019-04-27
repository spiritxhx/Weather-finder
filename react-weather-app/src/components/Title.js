import React from 'react';

export class Title extends React.Component{
    render() {
        return(
            <div>
                <h1 className='title-container__title'>Weather Finder</h1>
                <h3 className='title-container__subtitle'>Find out temperature, conditions and more...</h3>
            </div>
        );
    }
}