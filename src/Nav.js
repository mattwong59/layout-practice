import React, { Component } from "react";

export default class Nav extends Component {
  constructor() {
    super();
    this.handleClick = this._handleClick.bind(this);
  }

  componentDidUpdate() {
    this._handleClick();
  }

  _handleClick() {
    const nav = this._acc.children[0].childNodes[1];
    nav.classList.toggle("active");
  }

  render() {
    return (
      <div ref={a => (this._acc = a)} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}
