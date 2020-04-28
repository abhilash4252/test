import React from "react";
const axios = require("axios");

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }
  handleChange = (e) => {
    this.setState({ country: e.target.value });
  };

  handleSubmit = () => {
    let self = this;
    axios
      .get("https://restcountries.eu/rest/v2/name/" + this.state.country)
      .then(function (data) {
        console.log(data);
        self.props.history.push("/details", { data: data.data });
      });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Select Country"
          value={this.state.country}
          onChange={this.handleChange}
        ></input>
        <button
          disabled={this.state.country === ""}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
