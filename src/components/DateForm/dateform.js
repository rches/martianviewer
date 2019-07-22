import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
      )
      .catch( error => {
    console.log(error);
    this.setState({images:"https://images.emojiterra.com/google/android-nougat/128px/1f914.png"});
  });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form className="earthdate" onSubmit={this.handleSubmit}>
          <div className="date">
            <label>
              Date:
              <input
                type="date"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" value="Submit" className="submit">
              Submit
            </button>
          </div>
        </form>

        <hr />

        <img
          className={this.state.images ? "yesImg" : "noImg"}
          src={this.state.images}
        />
      </>
    );
  }
}

export { DateForm };
