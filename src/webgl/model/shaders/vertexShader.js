

const vertexShader = `
    varying vec3 vUv;
    varying float vScale;
    
    uniform vec3 bboxMin;
    uniform vec3 bboxMax;
    uniform float scale;
    uniform bool aRandomExist;
    uniform float size;
    uniform float tranparency;
    uniform float floatingAlpha;
    uniform vec3 dir;

    attribute vec3 aRandom;

    uniform float uTime; 
    uniform vec3 mousePos; 
    
    #include <common>
    #include <morphtarget_pars_vertex>

    float d_x;
    float d_y;
    float d_z;

    float distanceV3(in vec3 veec1, in vec3 veec2) {
        d_x = veec1.x - veec2.x;
        d_y = veec1.y - veec2.y;
        d_z = veec1.z - veec2.z;
        return sqrt( d_x * d_x + d_y * d_y + d_z * d_z );
    }
    
    void main() {
    
        
        
        #include <begin_vertex>
        #include <morphtarget_vertex>

        vScale = scale;
        
        float time = uTime * 2.;

        if (aRandomExist) {
            transformed.x += sin(time * aRandom.x) * .1;
            transformed.y += sin(time * aRandom.y) * .1;
            transformed.z += sin(time * aRandom.z) * .1;
        }

        transformed.x += floatingAlpha * (sin(time / dir.x) * 10.);
        transformed.z += floatingAlpha * (cos(time / dir.y) * 10.);
        transformed.y += floatingAlpha * (cos(time / dir.z) * 10.);

        transformed.x *= scale + (sin(transformed.x * 4. + time * aRandom.x) * (1. - scale));
        transformed.y *= scale + (cos(transformed.y * 4. + time * aRandom.y) * (1. - scale));
        transformed.z *= scale + (sin(transformed.z * 4. + time * aRandom.z) * (1. - scale));
        
        vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
        vUv.x = (position.x - bboxMin.x) / (bboxMax.x - bboxMin.x);
        vUv.z = (position.z - bboxMin.z) / (bboxMax.z - bboxMin.z);

        float dis = distanceV3(transformed, mousePos) / 15.;

        // transformed.x *= dis;

        vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

        gl_Position = projectionMatrix * mvPosition;

        gl_PointSize = size;

        if (aRandomExist) {
            gl_PointSize = gl_PointSize * (aRandom.x );
        }

        gl_PointSize = gl_PointSize * ( 300.0 / -mvPosition.z );
        // gl_PointSize = 5.;

    }
`

export {
    vertexShader
}