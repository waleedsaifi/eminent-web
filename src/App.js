import React from 'react';
import GLContainer from 'Components/GLContainer/GLContainer'
import Container from 'Components/Container/Container'
import { ParticleBackground } from 'Components/ParticleBackground';

function App() {
    return (

        <>
        <ParticleBackground/>
        <GLContainer/>
        <Container/>
        </>
    );

}

export default App;