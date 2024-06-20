import { NewAlbums } from "./models";

export function getNewAlbum(): Promise<NewAlbums> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/album/newest`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}