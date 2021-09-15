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
            <ParticleBackground currentTheme={darkTheme} />
            <GLContainer currentSectionTitle="approach" />
            <Container
              currentSectionTitle="approach"
              currentTheme={darkTheme}
            />
          </Route>
          <Route exact path="/work">
             <ParticleBackground currentTheme={darkTheme} />
            <GLContainer currentSectionTitle="work" />
           <Container currentSectionTitle="work" currentTheme={darkTheme} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
