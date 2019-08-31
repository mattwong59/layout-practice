import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <section>
        <h3>Selected Works</h3>
        <h4 className="subtitle">Check out some of my highlights</h4>
        <div className="showcase">
          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/beercat-pub-pounce.png")}
              alt="Beer Cat Brewer Tour screenshot"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/Beer-Cat-Tourism-App"
                target="_blank"
              >
                Beer Cat
              </a>
              <p>
                Customized brewery tour app with personal beer recommendations
              </p>
            </div>
          </div>

          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/chatty-two-users.png")}
              alt="Chatty Messaging App"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/chatty-app"
                target="_blank"
              >
                Chatty
              </a>
              <p>Messaging app</p>
            </div>
          </div>

          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/decider.png")}
              alt="Decider survey app"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/decider_midterm"
                target="_blank"
              >
                Decider
              </a>
              <p>A survey app that allows friends to post polls</p>
            </div>
          </div>

          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/tweeter-restyle.png")}
              alt="Tweeter (A twitter clone)"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/tweeter"
                target="_blank"
              >
                Tweeter
              </a>
              <p>Twitter clone </p>
            </div>
          </div>

          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/Tiny-App-URLS.png")}
              alt="Tiny App URL shortener"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/tinyApp"
                target="_blank"
              >
                Tiny App
              </a>
              <p>URL shortener</p>
            </div>
          </div>

          <div className="project-card">
            <img
              className="project-img"
              src={require("./docs/jungle-resize.png")}
              alt="Jungle E-commerce app"
              srcset=""
            />
            <div className="project-description">
              <a
                className="project-title"
                href="https://github.com/mattwong59/jungle-rails"
                target="_blank"
              >
                Jungle
              </a>
              <p>An e-commerce app built in Ruby</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
