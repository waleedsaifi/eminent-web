const fragmentShader = `
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    varying vec3 vPosition;
    varying vec3 vUv;
    
    varying float vScale;
    
    uniform float colorOffset;

    uniform sampler2D pointT;

    void main() {
        vec3 color = vec3(0., 0., 0.);

        color = mix(uColor1, uColor2, vUv.z * colorOffset);

        vec4 outColor = vec4(color, vScale);
        float nextAlpha = distance( vec2(0.5,0.5), gl_PointCoord );
    
        outColor.a = (  1. - nextAlpha * 2.) * vScale ;

        if(outColor.a < .5 ) {
            discard;
        }

        gl_FragColor = outColor; 
    }
`

export {
    fragmentShader
}