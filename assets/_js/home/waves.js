import * as PIXI from 'pixi.js'
// import 'pixi-projection'

const HomeWaves = () => {
  let loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite
  let renderer, water_mesh, wave_mesh

  const water_pointsRef = []
  let water_originalVertices = []

  const wave_pointsRef = []
  let wave_originalVertices = []

  loader
    .add('../assets/images/home/water.png')
    .add('../assets/images/home/water2.png')
    .add('../assets/images/home/wave.png')
    .add('../assets/images/home/dmap_waves.jpg')
    .load()
    .on('progress', loadProgressHandler)
    .once('complete', start)

  function loadProgressHandler(loader, resource) {
    console.log('loading: ' + resource.url)
  }

  function createApp(id) {
    let divID = document.getElementById(id)
    let width = divID.offsetWidth
    let height = divID.offsetHeight
    let renderer = PIXI.autoDetectRenderer(width, height)

    let app = new PIXI.Application(width, height, {
      transparent: true
    })
    let stage = new PIXI.DisplayObjectContainer()
    //app.autoResize = true;
    divID.appendChild(app.view)

    return [width, height, renderer, app, stage]
  }

  let waterApp = createApp('water')
  let wavesApp = createApp('wave')

  const container_water = new PIXI.Container()
  container_water.position.x = 0
  container_water.position.y = 0

  const water_filter = PIXI.Sprite.fromImage(
    '../assets/images/home/dmap_waves.jpg'
  )
  const water_displacement = new PIXI.filters.DisplacementFilter(water_filter)
  water_filter.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
  container_water.filters = [water_displacement]
  water_filter.position.x = -20
  water_filter.scale.x = 1
  water_filter.scale.y = 1

  const water_bg = PIXI.Texture.fromImage('../assets/images/home/water.png')
  water_bg.on('update', function() {
    if (water_mesh) {
      container_water.removeChild(water_mesh)
    }
    water_mesh = new PIXI.mesh.Plane(this, 2, 4)
    water_mesh.width = this.width //renderer.width * 0.35;
    water_mesh.height = this.height //renderer.width * 0.5;
    //console.log(this.height + " " + this.width);
    container_water.addChildAt(water_mesh, 0)

    water_originalVertices = water_mesh.vertices.slice(0)

    const progress = document.getElementById('water').getAttribute('data-per')
    water_mesh.vertices[5] = calculateV(
      water_originalVertices[5],
      progress * -0.2
    )
    water_mesh.vertices[7] = calculateV(
      water_originalVertices[7],
      progress * -0.2
    )
    water_mesh.vertices[9] = calculateV(
      water_originalVertices[9],
      progress * -0.4
    )
    water_mesh.vertices[11] = calculateV(
      water_originalVertices[11],
      progress * -0.4
    )

    function calculateV(v, n) {
      let r = v + water_mesh.height * n
      return r
    }
  })

  const water_front = new PIXI.Sprite.fromImage(
    '../assets/images/home/water2.png'
  )
  water_front.width = waterApp[0] //renderer.width * 0.35;
  water_front.height = waterApp[1] / 1.5
  water_front.anchor.set(0.5, 1.0)
  water_front.x = waterApp[3].screen.width / 2
  water_front.y = waterApp[3].screen.height

  const container_wave = new PIXI.Container()
  container_wave.position.x = 0
  container_wave.position.y = 0
  container_wave.pivot.x = container_wave.width * 0.4
  container_wave.pivot.y = container_wave.height * -0.3

  let wave_front = new PIXI.Texture.fromImage('../assets/images/home/wave.png')
  wave_front.on('update', function() {
    if (wave_mesh) {
      container_wave.removeChild(wave_mesh)
    }
    wave_mesh = new PIXI.mesh.Plane(this, 20, 5)

    wave_mesh.width = waterApp[0] //renderer.width * 0.35;
    wave_mesh.height = 400 //renderer.width * 0.5;
    container_wave.addChild(wave_mesh) //, 0);
    //t_mesh.pivot.x = t_mesh.width * 0.4;
    wave_mesh.pivot.y = wave_mesh.height * -0.3

    wave_originalVertices = wave_mesh.vertices.slice(0)
    animate()
  })

  animate()
  let count, count2, blurcount
  count = count2 = blurcount = 0

  function animate() {
    count = 0.7
    count2 += 0.03
    blurcount += 0.005

    water_filter.x += 1
    water_filter.y += 0

    if (wave_mesh && wave_mesh.vertices) {
      for (let i = 0; i < 200; i++) {
        if (i % 2 !== 0) {
          wave_mesh.vertices[i] =
            wave_originalVertices[i] + 50 * Math.cos(count2 + i * 0.1)
        }
      }
    }

    requestAnimationFrame(animate)
    waterApp[2].render(waterApp[4])
    wavesApp[2].render(wavesApp[4])
  }

  function start() {
    waterApp[3].stage.addChild(container_water)
    container_water.addChild(water_front) //, 0);
    container_water.addChild(water_filter)
    wavesApp[3].stage.addChild(container_wave)
  }
}

export default HomeWaves
