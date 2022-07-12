/**
 * Variables
 */

let isMouseDown=false
let canvas = document.createElement('canvas')
let body = document.getElementsByTagName('body')[0]
let ctx = canvas.getContext('2d')
let linesArray = []
let currentSize = 5
let currentColor = '#c81464'
let currentBg = '#ffffff'

/**
 * Create the canvas inside the DOM
 */
function createCanvas () {
  canvas.id = 'canvas'
  canvas.width = parseInt(document.getElementById('sizeX').value)
  canvas.height = parseInt(document.getElementById('sizeY').value)
  canvas.style.zIndex = 8
  canvas.style.position = 'absolute',
  canvas.style.border = '1px solid black'
  ctx.fillStyle = currentBg
  ctx.fillRect(0,0,canvas.width, canvas.height)
  body.appendChild(canvas)
}

/**
 * Get current mouse position inside the canvas
 * @param {*} canvas 
 * @param {*} evt 
 * @returns 
 */
function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect()
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

/**
 * Start a new line on draw
 * @param {.} canvas 
 * @param {*} evt 
 */
function mouseDown (canvas, evt) {
  let mousePos = getMousePos(canvas, evt)
  isMouseDown = true
  ctx.moveTo(mousePos.x, mousePos.y)
  ctx.beginPath()
  ctx.lineWidth = currentSize
  ctx.lineCap = 'round'
  ctx.strokeStyle = currentColor
}

/**
 * Draw the line on mouse move
 * @param {*} canvas 
 * @param {*} evt 
 */
function mouseMove (canvas, evt) {
  if (isMouseDown) {
    let mousePos = getMousePos(canvas, evt)
    ctx.lineTo(mousePos.x, mousePos.y)
    ctx.stroke()
    store(mousePos.x, mousePos.y, currentSize, currentColor)
  }
}

/**
 * Stop draw
 */
function mouseUp () {
  isMouseDown = false
  store()
}

/**
 * Store the line inside an array
 * @param {*} x 
 * @param {*} y 
 * @param {*} size 
 * @param {*} color 
 */
function store(x, y, size, color) {
  linesArray.push({
    'x': x,
    'y': y,
    'size': size,
    'color': color
  })
}

/**
 * Redraw draw from lines array
 */
function redraw () {
  for (let i=1; i < linesArray.length; i++) {
    ctx.beginPath()
    ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y)
    ctx.lineWidth = linesArray[i].size
    ctx.lineCap = 'round'
    ctx.strokeStyle = linesArray[i].color
    ctx.lineTo(linesArray[i].x, linesArray[i].y)
    ctx.stroke()
  }
}

/**
 * Save canvas as image (PNG)
 * @param {*} link 
 * @param {*} canvas 
 * @param {*} filename 
 */
function downloadCanvas(link, canvas, filename) {
  link.href = document.getElementById(canvas).toDataURL()
  link.download = filename
}

/**
 * Erase draw tool
 */
function eraser () {
  currentSize = 50
  currentColor = ctx.fillStyle
}

/**
 * Save canvas to localstorage
 */
function save () {
  localStorage.removeItem('savedCanvas')
  localStorage.setItem('savedCanvas', JSON.stringify(linesArray))
  console.log('Saved canvas !')
}

/**
 * Load saved canvas from localstorage
 */
function load () {
  if (localStorage.getItem('savedCanvas')) {
    linesArray = JSON.parse(localStorage.getItem('savedCanvas'))
    redraw()
  } else {
    console.log('No canvas in local storage')
  }
}

/**
 * Mouse moves
 */
canvas.addEventListener('mousedown', (e) => mouseDown(canvas, e))
canvas.addEventListener('mousemove', (e) => mouseMove(canvas, e))
canvas.addEventListener('mouseup', mouseUp)

/**
 * Canvas size update
 */
document.getElementById('canvasUpdate').addEventListener('click', function () {
  createCanvas()
  redraw()
})

/**
 * Colors
 */
document.getElementById('colorpicker').addEventListener('change', function () {
  currentColor = this.value
})
document.getElementById('bgcolorpicker').addEventListener('change', function () {
  ctx.fillStyle = this.value
  ctx.fillRect(0,0,canvas.width, canvas.height)
  redraw()
  currentBg = ctx.fillStyle
})

/**
 * Size
 */
document.getElementById('controlSize').addEventListener('change', function () {
  currentSize = this.value
  document.getElementById('showSize').innerHTML = this.value
})

/**
 * Image export
 */
document.getElementById('saveToImage').addEventListener('click', function () {
  downloadCanvas(this, 'canvas', 'masterpiece.png')
}, false)

/**
 * Buttons
 */
document.getElementById('eraser').addEventListener('click', eraser)
document.getElementById('clear').addEventListener('click', createCanvas)
document.getElementById('save').addEventListener('click', save)
document.getElementById('load').addEventListener('click', load)
document.getElementById('clearCache').addEventListener('click', function () {
  localStorage.removeItem('savedCanvas')
  linesArray = []
})


createCanvas()