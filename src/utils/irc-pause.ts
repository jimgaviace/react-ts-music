 export interface ILyric {
  text: string
  time: number
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  //1.拿到每行歌词
  const lines:string[] = lyricString.split('\n')
  //2.拿到每行歌词的时间
  const lyrics : ILyric[] = []
  for (const line of lines) {
    //1.匹配结果
    const result = timeRegExp.exec(line)
    if (!result) continue
    //2.拿到时间
    const time = Number(result[1]) * 60 * 1000 + Number(result[2]) * 1000 + Number(result[3])
    //3.拿到文本
    const text = line.replace(timeRegExp, '').trim()
    //4.存储
    lyrics.push({ text, time })
  }
  return lyrics
}