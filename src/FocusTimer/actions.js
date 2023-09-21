import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  console.log("toggleRunning Function")
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  console.log("reset Function")
}
export function plus() {
  console.log("plus Function")
}
export function minus() {
  console.log("minus Function")
}

export function toggleMusicForest() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicForest)
}
export function toggleMusicRain() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicRain)
}
export function toggleMusicCoffee() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicCoffee)
}
export function toggleMusicFireplace() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicFireplace)
}
