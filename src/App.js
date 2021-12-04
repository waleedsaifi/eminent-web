import React, { Suspense } from "react";
// import GLContainer from "Components/GLContainer/GLContainer";
import Container from "Components/Container/Container";
// import { ParticleBackground } from "Components/ParticleBackground/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "constants/constants";
//// "push": npm run build ; aws s3 sync ./build s3://eminentfuture.com/
function App() {
  const GLContainer = React.lazy(() =>
    import("Components/GLContainer/GLContainer")
  );
  const ParticleBackground = React.lazy(() =>
    import("Components/ParticleBackground/ParticleBackground")
  );
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={"Loading"}>
              {/* <ParticleBackground currentTheme={darkTheme} /> */}
              {/* <GLContainer currentSectionTitle="home" /> */}
            </Suspense>
            <Container currentSectionTitle="home" currentTheme={darkTheme} />
          </Route>
          <Route exact path="/approach">
            <Suspense fallback={"Loading"}>
              <ParticleBackground currentTheme={lightTheme} />
              <GLContainer currentSectionTitle="approach" />
            </Suspense>
            <Container
              currentSectionTitle="approach"
              currentTheme={lightTheme}
            />
          </Route>
          <Route exact path="/work">
            <Suspense fallback={"Loading"}>
              <ParticleBackground currentTheme={darkTheme} />
              <GLContainer currentSectionTitle="work" />
            </Suspense>
            <Container currentSectionTitle="work" currentTheme={darkTheme} />
          </Route>
          <Route exact path="/eminent-apps">
            <Suspense fallback={"Loading"}>
              <ParticleBackground currentTheme={darkTheme} />
            </Suspense>
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="work"
              currentTheme={darkTheme}
              showApps={true}
            />
          </Route>
          <Route exact path="/services">
           <Suspense fallback={"Loading"}>
            <ParticleBackground currentTheme={darkTheme} />
            </Suspense>
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="other"
              currentTheme={darkTheme}
              showServices={true}
            />
          </Route>
          <Route exact path="/projects">
            <Suspense fallback={"Loading"}>
            <ParticleBackground currentTheme={darkTheme} />
            </Suspense>
            {/* <GLContainer currentSectionTitle="work" /> */}
            <Container
              currentSectionTitle="other"
              currentTheme={darkTheme}
              showProjects={true}
            />
          </Route>
          <Route exact path="/about">
            <Suspense fallback={"Loading"}>
            <ParticleBackground currentTheme={darkTheme} />
            </Suspense>
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
