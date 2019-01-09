import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { StyledDateForm, StyledImage } from "./dateformstyle";

class DateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      images: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
          this.state.value +
          "&api_key=ey4JvDbo9fpSUq0gD528KBxEIAJ4E2WIAr4cJBTp"
      )
      .then(response =>
        this.setState({ images: response.data.photos[1].img_src })
      );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <StyledDateForm>
          <form className="earthdate" onSubmit={this.handleSubmit}>
            <label>
              Date:
              <input
                type="date"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </StyledDateForm>
        <StyledImage>
          <img
            className={this.state.images ? "imgOut" : "noImg"}
            src={this.state.images}
          />
        </StyledImage>
      </div>
    );
  }
}

export { DateForm };
