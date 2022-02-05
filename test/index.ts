import '../src/index.js'
import { PieProgress } from '../src/index.js'

const progress = document.getElementById("progress") as PieProgress

let value = 0.0

setInterval(() => {
    //progress.setAttribute("progress", (value++ / 10.0).toString())
    progress.setProgress(value++ / 10.0)
}, 30)