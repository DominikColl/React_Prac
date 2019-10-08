import React from 'react';
import Button from './Button';
const WeatherForm = props => {
    return (  
        <form>
            <h2>Enter city name for weather</h2>
            <input type='text'></input>
            <div><Button string='Submit' onClick={props.click}/></div>
        </form>
    );
}
 
export default WeatherForm;