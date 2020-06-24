import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { showOverlay: false };
    this.changeOverlayState = this.changeOverlayState.bind(this);
  }
  changeOverlayState() {
    this.setState({ showOverlay: true }, () => {
      setTimeout(() => this.setState({ showOverlay: false }), 1500);
    });
  }
  render() {
    const { name, background, moreUrl } = this.props;
    const { showOverlay } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeOverlayState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            className={`copy-overlay ${showOverlay && "show"}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${showOverlay && "show"}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
