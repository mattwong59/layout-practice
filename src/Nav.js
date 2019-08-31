import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <header>
        <div className="logo">MW</div>
        <nav>
          <ul>
            <li>
              <a href="" className="active">
                Home
              </a>
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
                className="far fa-envelope"
              />
            </li>
            <li>
              <a
                href="https://github.com/mattwong59"
                target="_blank"
                className="fab fa-github"
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mattwong59/"
                target="_blank"
                className="fab fa-linkedin"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/mattwong59"
                target="_blank"
                className="fab fa-codepen"
              />
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="fas fa-bars" aria-hidden="true"></i>
        </div>
      </header>
    );
  }
}
