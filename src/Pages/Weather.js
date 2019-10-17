import React, { Component } from 'react';
import WeatherForm from '../Components/Weather_Form';
import WeatherCard from '../Components/WeatherCard';
class Weather extends Component {
    //temp is only one being added to others need to be set
    state = {
        cityy:'',
        temp:'',
        descrip:'',
    }
   //working for temp conversion
   kelvinToFar=(kelvinTemp)=>{
         return kelvinTemp*9/5-459.67;
   }
   //getting data with city parameter
   async fetchData(city){
       const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac5f4b1dc88f7f8a76207eea7ab8af6c`)
       const data=await res.json()
       this.convertData(data.name,data.main.temp,data.main.humidity,data.weather[0].description);
       let cityy=city;
       let temp=data.main.temp;
       let descrip=data.weather[0].description;
       this.setState({temp});
       this.setState({cityy});
       this.setState({descrip});
       console.log(this.state.temp);
       console.log(this.state.cityy);
       console.log(this.state.descrip);
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
    //    let createCard=()=>{
    //          return <WeatherCard cityName={this.state.cityy} temp={this.state.temp} descrip={this.state.descrip}/>
    //     }
        //weather form has input city value should be pulled fro api
        return ( <div><WeatherForm click={this.click}/>
        <WeatherCard cityName={this.state.cityy} temp={this.state.temp} descrip={this.state.descrip}/>
                        {/* {createCard} */}
                </div>
        );
    }
}
export default Weather;