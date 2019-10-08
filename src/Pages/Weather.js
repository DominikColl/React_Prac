import React, { Component } from 'react';
import WeatherForm from '../Components/Weather_Form';
class Weather extends Component {
    state = {temp:'',  }
   //working for temp conversion
   kelvinToFar=(kelvinTemp)=>{
         return kelvinTemp*9/5-459.67;
   }
   //getting data with city parameter
   async fetchData(city){
       //hard coded looking up Orlando right now being logged to console
       const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac5f4b1dc88f7f8a76207eea7ab8af6c`)
       const data=await res.json()
       this.convertData(data.name,data.main.temp,data.main.humidity,data.weather[0].description);
       let temp=data.main.temp;
       this.setState({temp});
       console.log(this.state.temp);
   }
   //happens onclick starts chain function 
   click=()=>{
       let t=document.querySelector('input');
       this.fetchData(t.value);
       t.value='';
   }
   convertData=(city,temp,humidity,description)=>{
         console.log(city,temp,humidity,description);
         temp=this.kelvinToFar(temp);
         console.log(temp.toFixed(2));
   }
    render() { 
        //weather form has input city value should be pulled fro api
        return ( <div><WeatherForm click={this.click}/></div> );
    }
}
export default Weather;