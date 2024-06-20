// import { SongDetail } from "./models";

export function getSongDetail(ids:any): Promise<any> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/song/detail?ids=${ids}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}

export function getLyric(ids:any): Promise<any> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/lyric?id=${ids}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}