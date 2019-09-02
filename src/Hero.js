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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            iure suscipit repellat voluptas ipsum repudiandae odio delectus
            saepe, molestias minus consequatur veniam eius temporibus in atque?
            Facilis eligendi fuga ducimus!
          </p>
        </div>
      </section>
    );
  }
}
