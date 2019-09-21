import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <footer>
        <h3>Get in Touch</h3>
        <div className="social">
          <ul>
            <li>
              <a
                href="mailto:mattwong59@gmail.com"
                target="_blank"
                className="far fa-envelope icon"
              />
            </li>
            <li>
              <a
                href="https://github.com/mattwong59"
                target="_blank"
                className="fab fa-github icon"
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mattwong59/"
                target="_blank"
                className="fab fa-linkedin icon"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/mattwong59"
                target="_blank"
                className="fab fa-codepen icon"
              />
            </li>
          </ul>
        </div>

        <p>&#9400;2019 Matt Wong</p>
      </footer>
    );
  }
}
