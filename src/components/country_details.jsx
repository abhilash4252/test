import React from "react";

const axios = require("axios");
export class CountryDetails extends React.Component {
  state = {
    weather_details: {},
    show_weather_details: false,
  };
  handleSubmit = (capital) => {
    let self = this;
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=e14947d457eee56cfece094de102aeb6&query=" +
          capital
      )
      .then(function (data) {
        console.log(data);
        self.setState({
          weather_details: data.data.current,
          show_weather_details: true,
        });
      });
  };
  render() {
    return (
      <div>
        {this.props.location.state.data.map((ele) => (
          <ul>
            <li>Name: {ele.name}</li>
            <li>
              Capital: {ele.capital}{" "}
              <button onClick={() => this.handleSubmit(ele.capital)}>
                {" "}
                Capital Weather
              </button>
              {this.state.show_weather_details && (
                <ul>
                  <li>
                    Temperature: {this.state.weather_details.temperature}{" "}
                  </li>
                  <li>Precip: {this.state.weather_details.precip} </li>
                  <li>WindSpeed: {this.state.weather_details.wind_speed} </li>
                  <li>
                    Images:{" "}
                    {this.state.weather_details.weather_icons.map((ele) => (
                      <img src={ele} alt="icons"></img>
                    ))}{" "}
                  </li>
                </ul>
              )}
            </li>
            <li>Lat-Long: {ele.latlng}</li>
            <li>Population: {ele.population}</li>
            <li>
              Flag: <img src={ele.flag} alt="flag"></img>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
