import * as scenes from './types/index'

const createScene = (data, engine) => {
  const { name } = data 

  const Scene = Object.values(scenes).find(s => s._name === name)

  return new Scene(data, engine)
}

export { createScene } 