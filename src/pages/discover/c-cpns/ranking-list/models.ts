export interface RankingLists {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: any[]
  updateFrequency: any
  backgroundCoverId: number
  backgroundCoverUrl: any
  titleImage: number
  titleImageUrl: any
  detailPageTitle: any
  englishTitle: any
  officialPlaylistType: any
  copied: boolean
  relateResType: any
  coverStatus: number
  subscribers: Subscriber[]
  subscribed: boolean
  creator: Creator
  tracks: Track[]
  videoIds: any
  videos: any
  trackIds: TrackId[]
  bannedTrackIds: any
  mvResourceInfos: any
  shareCount: number
  commentCount: number
  remixVideo: any
  newDetailPageRemixVideo: any
  sharedUsers: any
  historySharedUsers: any
  gradeStatus: string
  score: any
  algTags: any
  distributeTags: any[]
  trialMode: number
  displayTags: any
  playlistType: string
  ToplistType: string
}

export interface RankingListRes {
  code: number
  urls: any
  sharedPrivilege: any
  resEntrance: any
  fromUsers: any
  fromUserCount: number
  songFromUsers: any
}