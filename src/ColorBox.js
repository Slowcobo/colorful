import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";

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
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { showOverlay } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeOverlayState}>
        <div className={classes.ColorBox}>
          <div
            className={`${classes.copyOverlay} ${
              showOverlay ? classes.showOverlay : undefined
            }`}
            style={{ backgroundColor: background }}
          />
          <div
            className={`${classes.copyMessage} ${
              showOverlay ? classes.showMessage : undefined
            }`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
