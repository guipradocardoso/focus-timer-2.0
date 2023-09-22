export const buttonPress = new Audio("./assets/sounds/button-press.wav")
export const kitchenTimer = new Audio("./assets/sounds/kichen-timer.mp3")
export const bgForest = new Audio("./assets/sounds/forest.wav")
export const bgRain = new Audio("./assets/sounds/rain.wav")
export const bgStore = new Audio("./assets/sounds/coffee-shop.wav")
export const bgFire = new Audio("./assets/sounds/fireplace.wav")

bgForest.loop = true
bgRain.loop = true
bgStore.loop = true
bgFire.loop = true

export function pauseMusic() {
  bgForest.pause()
  bgRain.pause()
  bgStore.pause()
  bgFire.pause()
}
