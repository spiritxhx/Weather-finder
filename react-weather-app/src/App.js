import React from 'react';
import './App.css';
import {Title} from './components/Title';
import {Form} from './components/Form';
import {Weather} from './components/Weather';

const apiKey ='2df8c55703d7bc6faabcf54584e1bd30';

class App extends React.Component {
  state = {
    temperature: undefined, 
    city: undefined, 
    country: undefined, 
    humidity: undefined, 
    description: undefined, 
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    const data = await apiCall.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp - 273.15, 
      city: data.name, 
      country: data.sys.country, 
      humidity: data.main.humidity, 
      description: data.weather[0].description, 
      error: ""
    });
  }
  render(){
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
