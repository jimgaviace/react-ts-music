import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getSongDetail, getLyric } from '../player-bar/api'
import { parseLyric } from "@/utils/irc-pause";
import { IRootState } from "@/store";

export const fetchCurrentSongAction = createAsyncThunk<void, number, {state:IRootState}>(
  'currentSong',
  (ids:number, { dispatch }) => {
    // const playSongList = getState().player.playSongList
    // const findIndex = playSongList.findIndex((song:any) => song.id === ids)
    // if(findIndex !== -1) {
      getSongDetail(ids).then((res:any) => {
         if(!res.songs.length) return
          const song = res.songs[0]
          console.log(res)
         //2.将song放到currentSong中
        //  const newPlaySongList = [...playSongList]
        //  newPlaySongList.push(song)
         dispatch(changeCurrentSongAction(song)) 
        //  dispatch(changePlaySongListAction(newPlaySongList))
        //  dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
      })
    // } else {
    //   const song = playSongList[findIndex]
    //   dispatch(changeCurrentSongAction(song))
    //   dispatch(changePlaySongIndexAction(findIndex))
    // }
    //1.获取歌曲信息

     //2.获取歌词
     getLyric(ids).then((res:any) => {
      //1.获取歌词字符串
        const lyricString = res.lrc.lyric
      //2.对歌词逐个解析
        const lyrics = parseLyric(lyricString)
      //3.将歌词放到currentSong中
        dispatch(changeLyricsAction(lyrics))
        console.log(lyrics)
     })
  }
)
interface IplayerState {
  currentSong: any,
  lyrics:[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}
const initialState:IplayerState = {
  currentSong:{},
  lyrics:[],
  lyricIndex: -1,
  playSongList: [
],
  playSongIndex: -1,
  playMode: 0
}

const playSlice = createSlice({
  name:'player',
  initialState,
  reducers:{
    changeCurrentSongAction(state, { payload }) {
        state.currentSong = payload
    },

    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
  }
  }
})

export const { changeCurrentSongAction, changeLyricsAction, changeLyricIndexAction, changePlaySongIndexAction, changePlaySongListAction } = playSlice.actions
export default playSlice.reducer