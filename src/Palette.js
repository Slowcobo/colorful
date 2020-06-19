import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* {Navbar gotes here} */}
        <div className="Palette-colors">
          {/* {Color boxes here } */}
          {colorBoxes}
        </div>
        {/* {Footer here} */}
      </div>
    );
  }
}

export default Palette;
