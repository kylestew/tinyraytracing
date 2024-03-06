import './style.css'
import { Color, createImageCanvas } from './image'

const image = createImageCanvas()

const red: Color = [255, 0, 0, 255]

image.set(10, 10, red)

console.log(image)

image.display()
