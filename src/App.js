import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedPalettes from "./seedPalettes";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedPalettes.find((palette) => palette.id === id);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={seedPalettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={() => <SingleColorPalette />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
