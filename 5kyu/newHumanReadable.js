function formatDuration (seconds) {
    const result = [];
  const years = Math.floor(seconds / (365 * 24 * 3600));
  seconds %= 365 * 24 * 3600; 
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  if(years) result.push(`${years} year${years>1?'s':''}`)
  if(days) result.push(`${days} day${days>1?'s':''}`)
  if(hours) result.push(`${hours} hour${hours>1?'s':''}`)
  if(minutes) result.push(`${minutes} minute${minutes>1?'s':''}`)
  if(seconds) result.push(`${seconds} second${seconds>1?'s':''}`)
    //checking output format
    if(!result.length) return "now"
  if(result.length===1) return result[0]
  if(result.length===2) return result.join(' and ')
  return `${result.slice(0,-1).join(', ')} and ${result[result.length-1]}`;
return result.join(' and ')
}
console.log(formatDuration(23423423))//271 days, 2 hours, 30 minutes and 23 seconds