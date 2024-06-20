import { RankingLists } from './models';

export function getRankingList(id: any) : Promise<RankingLists>{
  return fetch (`https://docs-neteasecloudmusicapi.vercel.app/playlist/detail?id=${id}`)
  .then((response) => {
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
}