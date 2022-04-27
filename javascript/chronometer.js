class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalI = null
  }

  start(callback) {
   this.intervalId = setInterval(() =>{
     this.currentTime += 1 ;
   }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    let secondsAfterMinute = this.currentTime % 60
    return secondsAfterMinutes
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0` + `${value}`
    } else{
      return (value.toString)
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.seconds())}`
  }
}

const chrono = new Chronometer 
chrono.start()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
