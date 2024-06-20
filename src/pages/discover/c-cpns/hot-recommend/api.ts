import { RecommendPlaylistRes } from "./models";

export function getRecommendPlaylist(limit:number): Promise<RecommendPlaylistRes> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/personalized?limit=${limit}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}