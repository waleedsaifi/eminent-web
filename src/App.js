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
            <ParticleBackground currentTheme={darkTheme} />
            <GLContainer currentSectionTitle="work" />
            <Container currentSectionTitle="work" currentTheme={darkTheme} />
          </Route>
          <Route exact path="/eminent-apps">
            <ParticleBackground currentTheme={darkTheme} />
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="work"
              currentTheme={darkTheme}
              showApps={true}
            />
          </Route>
          <Route exact path="/services">
            <ParticleBackground currentTheme={darkTheme} />
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="other"
              currentTheme={darkTheme}
              showServices={true}
            />
          </Route>
          <Route exact path="/projects">
            <ParticleBackground currentTheme={darkTheme} />
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="other"
              currentTheme={darkTheme}
              showProjects={true}
            />
          </Route>
          <Route exact path="/about">
            <ParticleBackground currentTheme={darkTheme} />
            {/* <GLContainer currentSectionTitle="other" /> */}
            <Container
              currentSectionTitle="other"
              currentTheme={darkTheme}
              showAbout={true}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
