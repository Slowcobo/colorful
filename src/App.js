import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List Here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual Palette Here</h1>}
        />
      </Switch>
      <Palette palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

export default App;
