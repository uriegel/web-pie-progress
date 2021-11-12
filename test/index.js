import '../src/index.js'

const progress = document.getElementById("progress")

let value = 0.0

setInterval(() => {
    progress.setAttribute("progress", value++ / 10.0)
}, 30)