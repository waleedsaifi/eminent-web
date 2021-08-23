import React from "react";
import GLContainer from "Components/GLContainer/GLContainer";
import Container from "Components/Container/Container";
import { ParticleBackground } from "Components/ParticleBackground";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "constants/constants";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ParticleBackground currentTheme={darkTheme} />
            <GLContainer currentSectionTitle="home" />
            <Container currentSectionTitle="home" currentTheme={darkTheme} />
          </Route>
          <Route exact path="/approach">
            <ParticleBackground currentTheme={lightTheme} />
            <GLContainer currentSectionTitle="approach" />
            <Container
              currentSectionTitle="approach"
              currentTheme={lightTheme}
            />
          </Route>
          <Route exact path="/work">
            <ParticleBackground currentTheme={lightTheme} />
            <GLContainer currentSectionTitle="work" />
            <Container currentSectionTitle="work" currentTheme={darkTheme} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
