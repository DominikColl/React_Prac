import React from 'react';

const WeatherCard = props => {
    return ( <section>
        <ul>
            <li>{props.cityName}</li>
            <li>{props.temp}</li>
            <li>{props.descrip}</li>
        </ul>
    </section> );
}
 
export default WeatherCard