export interface NewAlbums {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  songs: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  paid: boolean
  onSale: boolean
  picId_str: string
  albums: album[]; // 专辑数组
}

export interface NewAlbumsRes {
  code: number; // 响应代码
  albums: Album[]; // 专辑数组
}