class Netease {
  static base_url: string =  "https://docs-neteasecloudmusicapi.vercel.app/"

  // 获取首页推荐轮播图
  static getBanner(): Promise<any> {
    return fetch(`${this.base_url}banner`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json();
    })
  }

  // 获取首页推荐歌单
  static getRecommendPlaylist(): Promise<any> {
    return fetch(`${this.base_url}personalized`)
    .then((response) => {
      if(!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json();
  })
}
}
export default Netease;