import { Vector2, Vector3, MathUtils, Points, CanvasTexture, NearestFilter, RepeatWrapping, MeshPhysicalMaterial, Mesh, SphereBufferGeometry, BackSide } from "three";
import { createShader } from "../model/shaders/shader";
import noise from "./../lib/noise";

function generateTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 1, 2, 1);

  return canvas;
}

function generateFillTexture() {
  // const canvas = document.createElement("canvas");
  // canvas.width = 2;
  // canvas.height = 2;

  // const context = canvas.getContext("2d");
  // context.fillStyle = "white";
  // context.fillRect(0, 1, 2, 1);
  const width = 512,
    height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  context.fillStyle = "rgb(127,127,255)";
  context.fillRect(0, 0, width, height);

  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 3 + 3;

    let nx = Math.random() * 2 - 1;
    let ny = Math.random() * 2 - 1;
    let nz = 1.5;

    const l = Math.sqrt(nx * nx + ny * ny + nz * nz);

    nx /= l;
    ny /= l;
    nz /= l;

    context.fillStyle =
      "rgb(" + (nx * 127 + 127) + "," + (ny * 127 + 127) + "," + nz * 255 + ")";
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fill();
  }

  return canvas;

  return canvas;
}

class Noise {
  _shaders = [];

  constructor(scene) {
    this.scene = scene;

    this.particlesSize = scene.data.particlesMaxSize;

    this.initModel();

    this.scene.engine.animationProcessor.add(
      this.render,
      MathUtils.generateUUID()
    );
  }

  get objects() {
    return this.scene.objects;
  }

  _activeColors = {};
  get activeColors() {
    return this._activeColors;
  }
  set activeColors(value) {
    this._activeColors = value;
  }

  someMaterials = [];

  initModel() {
    const { data, object } = this.scene;

    // const meshesToAdd = []

    object.traverse((obj) => {
      if (obj.isMesh) {
        if (obj.name === "pCube1" && this.scene.data.name === "transparency") {
          //   meshesToAdd.push(obj)

          return;
        }
        if (this.scene.data.name === "eminent") {
          return;
        }

        const geometry = obj.geometry;
        const colorIndex = this.scene.data.secondary.some((name) =>
          obj.name.includes(name)
        )
          ? 1
          : 0;

        var newObj = new Points(geometry);

        newObj.userData = {
          main: data.colors,
          extra: data.extra_colors,
        };

        const material = this.getShaderMaterial(
          newObj,
          obj,
          data.colors[colorIndex]
        );
        newObj.material = material;
        newObj.scale.copy(obj.scale);

        // if(obj.name.includes('sphere1'))
        newObj.morphTargetDictionary = obj.morphTargetDictionary;
        newObj.morphTargetInfluences = obj.morphTargetInfluences;

        // console.log({geometry, obj, newObj})

        this.pointSize = data.pointSize;
        this.scale = 1;

        this.scene.group.add(newObj);

        this.scene.objects.push(newObj);

        this.scene.engine.animationProcessor.add(
          this.updateObj(newObj, obj),
          MathUtils.generateUUID()
        );

        //inc += 1
      }
    });

    if (this.scene.data.name === "eminent") {
      var obj = object.children.filter((obj) => obj.name === "Eminent-Icon")[0];

      const texture = new CanvasTexture(generateFillTexture());
      texture.magFilter = NearestFilter;
      texture.wrapT = RepeatWrapping;
      texture.wrapS = RepeatWrapping;
      texture.repeat.x = 10;
      texture.repeat.y = 6;
      texture.anisotropy = 16;

      const material = new  MeshPhysicalMaterial({
        // metalness: 1,
        // roughness: 0,
        // // alphaMap: texture,
        // //alphaTest: 0.5,
        // normalMap: texture,
        // // envMap: this.scene.engine.envMap,
        // // envMapIntensity: 1,
        // depthWrite: false,
        // // transmission: 1, // use material.transmission for glass materials
        // // opacity: 1, // set material.opacity to 1 when material.transmission is non-zero
        // transparent: false,
        // color: new Color(0x7dab9e),
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        metalness: 0.6,
        roughness: 0.5,
        color: 0x678f7d,
        normalMap: texture,
        normalScale: new Vector2(0.15, 0.15),
      });

      var newObj = new Mesh(obj.geometry, material);
      newObj.userData = {
        main: data.colors,
        extra: data.extra_colors,
      };

      this.scene.group.add(newObj);
      this.scene.objects.push(newObj);
      this.scene.engine.animationProcessor.add(
        this.updateObj(newObj, obj),
      MathUtils.generateUUID()
      );
    }

    if (data.addTransparency) {
      const geo = new SphereBufferGeometry(70, 32, 32);

      const texture = new CanvasTexture(generateTexture());

      texture.magFilter = NearestFilter;
      texture.wrapT = RepeatWrapping;
      texture.wrapS = RepeatWrapping;
      texture.repeat.set(1, 3.5);

      const material = new MeshPhysicalMaterial({
        metalness: 0,
        roughness: 0,
        alphaMap: texture,
        // alphaTest: 0.5,
        envMap: this.scene.engine.envMap,
        envMapIntensity: 1,
        depthWrite: false,
        transmission: 0.8, // use material.transmission for glass materials
        opacity: 1, // set material.opacity to 1 when material.transmission is non-zero
        transparent: true,
      });

      const mat1 = new MeshPhysicalMaterial().copy(material);

      const mat1b = new MeshPhysicalMaterial().copy(material);
      // mat1b.premultipliedAlpha = true
      mat1b.side = BackSide;

      const mesh1 = new Mesh(geo, mat1);
      const mesh1b = new Mesh(geo, mat1b);
      mesh1b.renderOrder = -1;

      this.someMaterials.push(mat1b);
      this.someMaterials.push(mat1);

      this.scene.engine.animationProcessor.add(() => {
        const t = performance.now();

        mesh1.rotation.x = t * 0.0002;
        mesh1.rotation.z = -t * 0.0002;
      }, new MathUtils.generateUUID());

      this.scene.group.add(mesh1);
      mesh1.add(mesh1b);

      this.objects.forEach((object) => {
        object.renderOrder = 2;
      });
    }
  }

  pointer = new Vector2();
  render = (_, time) => {
    if (this.scene.enabled) {
      this._shaders.forEach((i) => i.update(time, this.scene.engine.pointer));
    }
  };

  createShaderMaterial(mesh, original_mesh, colorData) {
    const { data } = this.scene;

    const shader = createShader({
      colorData,
      colorOffset: data.gradient_offset,
      size: this.pointSize,
      model: mesh,
      original_mesh: original_mesh,
      engine: this.scene.engine,
      buffer: !this.scene.data.no_randomise,
    });

    return shader;
  }

  _scale = 0;
  get scale() {
    return this._scale;
  }

  set scale(value) {
    this._scale = value;

    this.someMaterials.forEach((mat) => {
      mat.opacity = value;
      mat.needsUpdate = true;
    });

    this._shaders.forEach((shader) => (shader.scale = value));
  }

  set pointSize(size) {
    this._pointSize = size;

    this._shaders.forEach((shader) => (shader.size = size));
  }

  get pointSize() {
    return this._pointSize;
  }

  getShaderMaterial(mesh, original_mesh, color) {
    const shader = this.createShaderMaterial(mesh, original_mesh, color);

    this._shaders.push(shader);

    mesh.userData.shader = shader;
    const { material } = shader;

    return material;
  }

  noiseTransAlpha = 0;

  perlin1 = {};
  perlin2 = {};

  updateObj = (newObj, obj) => () => {
    if (this.scene.enabled) {
      if (this.scene.positionWatch) {
        newObj.scale.copy(obj.scale.clone());
        newObj.position.copy(obj.position.clone());
        newObj.rotation.copy(obj.rotation.clone());
      }

      if (this.scene.perlinEnabled) {
        const { geometry } = newObj;
        // const { vertices } = geometry

        const positionAttribute = geometry.attributes.position;
        const size = this.particlesSize;

        const noiseRangeLow = this.perlin1.noiseRangeLow;
        const noiseRangeHigh = this.perlin1.noiseRangeHigh;
        const timeAlpha = this.perlin1.timeAlpha;

        const noiseRangeLow2 = this.perlin2.noiseRangeLow;
        const noiseRangeHigh2 = this.perlin2.noiseRangeHigh;
        const timeAlpha2 = this.perlin2.timeAlpha;

        const time = performance.now() * timeAlpha;
        const time2 = performance.now() * timeAlpha2;

        const v3 = new Vector3();
        const _v3 = new Vector3();

        const fVector = new Vector3();

        for (let i = 0; i < positionAttribute.count; i = i + 1) {
          const x = positionAttribute.getX(i);
          const y = positionAttribute.getY(i);
          const z = positionAttribute.getZ(i);

          v3.set(x, y, z);
          v3.normalize().multiplyScalar(
            size +
              noiseRangeHigh *
                noise.perlin3(
                  v3.x * noiseRangeLow + time,
                  v3.y * noiseRangeLow,
                  v3.z * noiseRangeLow
                )
          );

          _v3.set(x, y, z);
          _v3
            .normalize()
            .multiplyScalar(
              size +
                noiseRangeHigh2 *
                  noise.perlin3(
                    _v3.x * noiseRangeLow2 + time2,
                    _v3.y * noiseRangeLow2,
                    _v3.z * noiseRangeLow2
                  )
            );

          fVector.lerpVectors(v3, _v3, this.noiseTransAlpha);

          positionAttribute.setXYZ(i, fVector.x, fVector.y, fVector.z);
        }

        positionAttribute.needsUpdate = true;

        geometry.computeVertexNormals();
        geometry.normalsNeedUpdate = true;
        geometry.verticesNeedUpdate = true;
      }
    }
  };
}

export { Noise };
