import React, {memo, useEffect, useState, useRef} from "react";
import type {FC, ReactNode} from "react";
import {PlayerBarWrapper} from "./style";
import { BarControl, BarPlayerInfo, BarOperator } from "./style";
import { NavLink } from "react-router-dom";
import { Slider, message } from "antd";
import { shallowEqualApp, useAppSelector } from "@/store";
import { formatImageSize } from "@/utils/format";
import { formatTime } from "@/utils/format";
import { getPlayUrl } from "@/utils/format";
import { useAppDispatch } from "@/store";
import { changeLyricIndexAction } from "@/pages/player/store/player";

interface IProps {
  children?: ReactNode;
}

const AppPlayerBar: FC<IProps> = () => {
  //组件内部定义数据
  const [isPlaying, setIsPlaying] =useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  // const [lyric, setLyric] = useState<any[]>([])
  // const [songDetail, setSongDetail] = useState<any>({})

  //从redux中获取数据
  const {currentSong, lyrics, lyricIndex} = useAppSelector(
    (state) => ({
      currentSong:state.player.currentSong,
      lyrics :state.player.lyrics,
      lyricIndex:state.player.lyricIndex
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  //组件内副作用的制作
  
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('播放成功')
      })
      .catch((err:any) => {
        setIsPlaying(false)
        console.log('歌曲播放失败',err)
      })

      //2获取音乐的总时长
      setDuration(currentSong.dt)
  },[currentSong])

  //音乐播放处理
  function handleTimeUpdate() {
    //1.获取当前播放的事件
    const currentTime = audioRef.current!.currentTime
    //2.计算当前歌曲进度
    if (!isSliding) {
      const progress = currentTime * 1000 / duration * 100
      setProgress(progress)
      setCurrentTime(currentTime*1000)
    }

    //3.歌词根据播放时间进行匹配
    let index = lyrics.length -1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }
    //4.匹配相应的index
    if(lyricIndex === index || index === -1) return
      dispatch(changeLyricIndexAction(index))
    console.log(lyrics[index].text)
    //5.滚动歌词
    message.open({
      content: lyrics[index]?.text,
      key: 'lyric',
      duration: 0
    })
  }
  //组件内部事件处理
  function handlePlayBtnClick() {
    //1.播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    //2.改变isPlaying状态
    setIsPlaying(!isPlaying)
  }

  
//进度条点击改变事件
  function handleSliderChange(value:number) {
    //0.设置拖拽状态
    //1.获取点击位置的时间
    const currentTime = (value / 100) *duration
    //2.设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000
    //3.currentTime/progress
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl className={isPlaying ? 'play' : 'stopped'}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <NavLink to='/player'>
            <img src={formatImageSize(currentSong?.al?.picUrl, 50)} className="image" alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider 
                step={0.5} 
                value={progress} 
                tooltip={{ formatter:null }}
                onChange={handleSliderChange}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}/>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar);