import { AritistListRes } from "./models";

export function getAritistList(limit:any): Promise<AritistListRes> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/artist/list?limit=${limit}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}