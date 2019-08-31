import React, { Component } from "react";
import Nav from "./Nav";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <Nav />
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
