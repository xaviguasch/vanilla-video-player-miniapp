const video = document.querySelector('#video')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const progress = document.querySelector('#progress')
const timestamp = document.querySelector('#timestamp')

// Play and pause video
function toggleVideoStatus() {
  return true
}

// Update play/pause icon
function updatePlayIcon() {
  return true
}

// Update progress and timestamp
function updateProgress() {
  return true
}

// Set video time to progress
function setVideoProgress() {
  return true
}

// Stop video
function stopVideo() {
  return true
}

// Event listeners

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updateProgress)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
