import anime from 'animejs'
import gsap from 'gsap'
import *as THREE from 'three'

const gradients = [
  {
    root: 'black',
    placeholders: []
  },
  {
    root: `radial-gradient(44.9% 88.78% at [A], #0D1A23 0%, rgba(13, 26, 35, 0) 100%), radial-gradient(58.01% 58.01% at [B], #0D1A23 0%, #04060B 100%)`,
    placeholders: [
      ['A', [85, 75], [75, 85]],
      ['B', [20, 30], [35, 25]],
    ]      
  },
  {
    root: `radial-gradient(44.48% 54.93% at [A], rgba(15, 39, 50, 0.71) 0%, rgba(15, 39, 50, 0.704375) 0.01%, rgba(8, 20, 29, 0.17) 100%), radial-gradient(54.64% 54.64% at [B], #183340 0%, #08141D 89.74%)`,
    placeholders: [
      ['A', [60, 75], [87, 76]],
      ['B', [34, 21], [30, 40]],
    ]

  },
  {
    root: `radial-gradient(36.33% 63.31% at [A], rgba(152, 181, 193, 0.71) 0%, #8EA4AE 0.01%, rgba(123, 143, 157, 0.17) 100%), radial-gradient(42.68% 42.68% at [B], #9FB9C5 0%, #6D8088 100%)`,
    placeholders: [
      ['A', [60, 75], [87, 76]],
      ['B', [34, 21], [30, 40]],
    ]
  }
]

class Gradient {
  constructor(data, dom) {
    this.root = data.root
    this.placeholders = data.placeholders
    this.wrapper = dom

    this.init()
  }

  init() {
    this.domElement = document.createElement('div')

    Object.assign(this.domElement.style, {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      zIndex: 1,
      
    })

    this.wrapper.appendChild(this.domElement)
  }

  render({x, y}) {
    const { innerWidth, innerHeight } = window

    const _root = this.placeholders.reduce((nextString, holder) => {
      const [key, xRange, yRange] = holder

      const nextX = gsap.utils.mapRange(0, innerWidth, ...xRange, x) 
      const nextY = gsap.utils.mapRange(0, innerHeight, ...yRange, y) 

      return nextString.replace(`[${key}]`, `${nextX}% ${nextY}%`)
    }, this.root)

    this.domElement.style.background = _root

    return _root
  }

  async fadeOut() {
    await gsap.to(this.domElement.style, {opacity: 0})

  }

  async fadeIn() {
    await gsap.to(this.domElement.style, {opacity: 1})

  }
}


class GradientController {
  pointer = new THREE.Vector2()
  
  constructor(dom) {
    this.dom = dom
  
    this.gradients = gradients.map(el => new Gradient(el, dom))
    
    this.applyBackground(0)
    
    this.initEventListeners()

    window.gradient = this
  }

  async applyBackground(n) {
    if(this.activeBackground === this.gradients[n]) {
      return
    }
    
    void this.activeBackground?.fadeOut()
    
    this.activeBackground = this.gradients[n]

    void this.activeBackground.fadeIn()

    this.render()
  }

  setStep(step) {
    const particles = document.querySelector('#particles canvas')

    Object.assign(particles.style, {
      opacity: step === -1 ? 0 : 1
    })
    
    
    // eslint-disable-next-line default-case
    switch(step) {
      case -1:
        this.applyBackground(0)
        break
    
      case 0:
      case 1:
      case 2:{
        this.applyBackground(1)
        break
      }
      case 3:
      case 4:
      case 5:
        this.applyBackground(2)
        break
      
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
        this.applyBackground(3)
        break
    }
  }

  initEventListeners() {
    window.addEventListener('mousemove', this.mouseMove)
  }

  mouseMove = (e) => { 
    this.pointer.set(e.clientX, e.clientY)

    this.render()
  }

  render() {
    this.activeBackground.render(this.pointer)

    // this.dom.style.background = gradient
  }
}

export { GradientController }