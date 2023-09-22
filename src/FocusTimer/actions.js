import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  console.log("toggleRunning Function")
  timer.countdown()
  sounds.buttonPress.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")

  timer.updateDisplay()
  sounds.buttonPress.play()
}
export function plus() {
  console.log("plus Function")
  if (state.minutes >= 60) {
    return
  }
  state.minutes += 5

  timer.updateDisplay()
  sounds.buttonPress.play()
}
export function minus() {
  console.log("minus Function")
  if (state.minutes < 5) {
    return
  }
  state.minutes -= 5

  timer.updateDisplay()
  sounds.buttonPress.play()
}

export function toggleMusicForest() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicForest)

  if (state.isMute) {
    sounds.pauseMusic()
    sounds.bgForest.play()
    return
  }
  sounds.bgForest.pause()
}
export function toggleMusicRain() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicRain)
  if (state.isMute) {
    sounds.pauseMusic()
    sounds.bgRain.play()
    return
  }
  sounds.bgRain.pause()
}
export function toggleMusicCoffee() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicCoffee)
  if (state.isMute) {
    sounds.pauseMusic()
    sounds.bgStore.play()
    return
  }
  sounds.bgStore.pause()
}
export function toggleMusicFireplace() {
  state.isMute = document.documentElement.classList.toggle("music-on")
  console.log(toggleMusicFireplace)
  if (state.isMute) {
    sounds.pauseMusic()
    sounds.bgFire.play()
    return
  }
  sounds.bgFire.pause()
}
