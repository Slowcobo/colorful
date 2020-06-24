import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
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
    const { name, background, moreUrl, showLink } = this.props;
    const { showOverlay } = this.state;
    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.changeOverlayState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            className={`copy-overlay ${showOverlay && "show"}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${showOverlay && "show"}`}>
            <h1>copied!</h1>
            <p className={isLight ? "dark-text" : undefined}>
              {this.props.background}
            </p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark ? "light-text" : undefined}>{name}</span>
            </div>
            <button
              className={`copy-button ${isLight ? "dark-text" : undefined}`}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${isLight ? "dark-text" : undefined}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
