function humanReadable (seconds) {
   
  let hours = Math.floor(seconds/3600);
  let remainingSeconds = seconds%3600;
  let minutes = Math.floor(remainingSeconds/60)
  let sec = remainingSeconds%60
  return [hours,minutes,sec].map(e=>e.toString().padStart(2,'0')).join(':')
}
console.log(humanReadable(3600))// 01:00: