export function formatCount(count: number) {
  if (count > 100000) {
    return `${(count / 10000).toFixed(1)}万`;
  } else {
    return count
  }
}

export function formatImageSize(
  imageUrl: string,
  width : number,
  height : number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function getPlayUrl(id:any) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function formatTime(time:number) {
  const timeSeconds = time / 1000
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60
  //格式化时间 补位 不足（2）用’0‘补位
  const formatMinute = String(minute).padStart(2,'0')
  const formatSecond = String(second).padStart(2,'0')
  return `${formatMinute}:${formatSecond}`
}
