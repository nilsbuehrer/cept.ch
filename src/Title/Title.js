import React, { Component } from "react";
import "./Title.scss";

export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    const clicked = this.state.clicked;

    let dot;
    if (clicked) {
      dot = (
        <span
          className="Dot Dot-missing"
          onClick={() => this.setState({ clicked: false })}
        ></span>
      );
    }

    return (
      <h1>
        <span className="Letter">c</span>
        <span className="Letter">e</span>
        <span className="Letter">p</span>
        <span className="Letter">t</span>
        <span
          className={clicked ? "Dot--moving" : "Dot"}
          onClick={() => this.setState({ clicked: true })}
        >
          .
        </span>
        {dot}
        <span className="Letter">c</span>
        <span className="Letter">h</span>
      </h1>
    );
  }
}

export default Title;
