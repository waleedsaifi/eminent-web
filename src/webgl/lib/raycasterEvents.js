import * as THREE from 'three'
import {
    throttle
} from 'lodash'

class RaycasterEvents {
    _raycaster = new THREE.Raycaster()

    pointer = new THREE.Vector2()

    _listeners = []

    _hovered = []

    enabled = true

    static EVENT_TYPES = {
        MOUSE_ON: 'mouseon',
        MOUSE_LEAVE: 'mouseleave',
        MOUSE_MOVE: 'mousemove',

        MOUSE_DOWN: 'mousedown',
        MOUSE_UP: 'mouseup',

        CLICK: 'click',
    }

    constructor(container, camera) {
        this.camera = camera
        this.container = container

        this._onMouseMove = throttle(this._onMouseMove, 50)

        this.init()
    }

    init() {
        this._listenEvents()
    }

    _listenEvents() {
        window.addEventListener('mousemove', (e) => {
            RaycasterEvents.transformMousePosition(this.container, e, this.pointer)
            this._onMouseMove()
        })

        this.container.addEventListener('pointerdown', this._onMouseDown)
        this.container.addEventListener('pointerup', this._onMouseUp)
    }

    _onMouseMove = () => {
        if (!this.enabled) {
            return null
        }

        this._raycaster.setFromCamera(this.pointer, this.camera)

        const objects = this._listeners.map((i) => i.objects).flat(1)

        const intersects = this._raycaster.intersectObjects(objects, true)

        const intersectedObjects = intersects.map((i) => i.object)

        intersects.forEach((intersection) => {
            if (!this._hovered.includes(intersection.object)) {
                this._dispatchEvent(RaycasterEvents.EVENT_TYPES.MOUSE_ON, {
                    object: intersection.object,
                })

                this._hovered.push(intersection.object)
            }

            this._dispatchEvent(RaycasterEvents.EVENT_TYPES.MOUSE_MOVE, {
                object: intersection.object,
            })
        })

        const filtered_HoveredItems = []

        this._hovered.forEach((_hovered) => {
            if (!intersectedObjects.includes(_hovered)) {
                filtered_HoveredItems.push(_hovered)
            }
        })

        filtered_HoveredItems.forEach((object) => {
            this._dispatchEvent(RaycasterEvents.EVENT_TYPES.MOUSE_LEAVE, {
                object,
            })
        })
        this._hovered = this._hovered.filter(
            (i) => !filtered_HoveredItems.includes(i)
        )
    }

    _onMouseDown = () => {
        if (!this.enabled) {
            return null
        }

        this._hovered.forEach((item) => {
            this._dispatchEvent(RaycasterEvents.EVENT_TYPES.MOUSE_DOWN, {
                object: item,
            })
        })
    }

    _onMouseUp = () => {
        if (!this.enabled) {
            return null
        }

        this._hovered.forEach((item) => {
            this._dispatchEvent(RaycasterEvents.EVENT_TYPES.MOUSE_UP, {
                object: item,
            })
        })
    }

    _dispatchEvent(_type, data) {
        this._listeners.forEach((listener) => {
            const {
                cb,
                objects,
                type,
                id
            } = listener

            if (type === _type) {
                if (objects.includes(data.object)) {
                    cb({
                        ...data,
                        pointer: this.pointer,
                        point: new THREE.Vector3(),
                        type,
                        id,
                    })
                }
            }
        })
    }

    addEventListener(
        type,
        objects,
        cb = (f) => f,
        options = {
            recursive: false
        }
    ) {
        const id = THREE.MathUtils.generateUUID()

        if (!Array.isArray(objects)) {
            objects = [objects]
        }

        const event = {
            type,
            objects,
            cb,
            id,
            options
        }

        this._listeners.push(event)

        // TODO process options.recursive

        // objects
        //   .map((object) => {
        //     const res = []

        //     if (options.recursive) {
        //       object.traverse((child) => res.push(child))
        //     } else {
        //       res.push(object)
        //     }

        //     return res
        //   })
        //   .flat(2)
        //   .forEach((object) => {
        //     if (object.userData.events) {
        //       object.userData.events.push(event)
        //     } else {
        //       object.userData.events = [event]
        //     }
        //   })

        return id
    }

    removeEventListener(id) {
        this._listeners = this._listeners.filter((i) => i.id !== id)
    }

    static transformMousePosition(
        domElement,
        event,
        pointer = new THREE.Vector2()
    ) {
        pointer.x = (event.layerX / domElement.offsetWidth) * 2 - 1
        pointer.y = -(event.layerY / domElement.offsetHeight) * 2 + 1

        return pointer
    }

    static transformMousePositionByV2(
        domElement,
        v2,
        pointer = new THREE.Vector2()
    ) {
        pointer.x = (v2.x / domElement.offsetWidth) * 2 - 1
        pointer.y = -(v2.y / domElement.offsetHeight) * 2 + 1

        return pointer
    }
}

export {
    RaycasterEvents
}