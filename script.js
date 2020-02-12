const video = document.querySelector('#video')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const progress = document.querySelector('#progress')
const timestamp = document.querySelector('#timestamp')

// Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
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
  video.currentTime = 0
  video.pause()
}

// Event listeners

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
