import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a
              href="mailto:mattwong59@gmail.com"
              target="_blank"
              class="far fa-envelope"
            />
          </li>
          <li>
            <a
              href="https://github.com/mattwong59"
              target="_blank"
              class="fab fa-github"
            />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mattwong59/"
              target="_blank"
              class="fab fa-linkedin"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/mattwong59"
              target="_blank"
              class="fab fa-codepen"
            />
          </li>
        </ul>
      </header>
    );
  }
}
