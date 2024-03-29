import React, { Component } from "react";
import Nav from "./Nav";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Nav>
          <header>
            <div className="logo">MW</div>
            <nav>
              <ul>
                <li>
                  <a href="#Home" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Work">Work</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
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
            </nav>
            <div className="menu-toggle">
              <i className="fas fa-bars" aria-hidden="true"></i>
            </div>
          </header>
        </Nav>

        <div className="content">
          <h2>Matt Wong</h2>
          <p>
            Hi there I'm Matt. Currently an SQL developer working in data
            warehousing for a business intelligence. Apart from SQL, I love
            developing projects in React and playing around with all the cool
            things that are possible in CSS3.{" "}
          </p>
        </div>
      </section>
    );
  }
}
