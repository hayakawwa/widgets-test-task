const formatTime = (value: number) => value < 10 ? '0' : ''
export const formattedTime = (timeInSeconds: number) => {
  const minutes: number = Math.floor(timeInSeconds / (1000 * 60) % 60);
  const seconds: number = Math.floor(timeInSeconds / (1000) % 60)
  const milliseconds = Math.floor((timeInSeconds % 1000) / 10);

  return formatTime(minutes) + minutes + ':' + formatTime(seconds) + seconds + ':' + formatTime(milliseconds) + milliseconds

}