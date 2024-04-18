export function convertDuration(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);
  return { minutes: minutes, seconds: remainingSeconds };
}

export const abberviateViewCount = (n) => {
  const prefix = ["", "K", "M", "B"];
  const threshold = 1000;

  let index = 0;
  while (n >= threshold && index < prefix.length - 1) {
    n /= threshold;
    index++;
  }
  const roundNumber = Math.round(n * 10) / 10;
 return roundNumber.toString() + prefix[index];
 
  
};
