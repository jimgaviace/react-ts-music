import { BannerRes } from "./models";


export function getBanner(): Promise<BannerRes> {
  return fetch(`https://docs-neteasecloudmusicapi.vercel.app/banner`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json();
  })
}
