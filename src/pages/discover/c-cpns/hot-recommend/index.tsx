import {memo} from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from './style';
import  AreaHeader  from '@/components/area-header';
import { useEffect, useState } from 'react';
import { getRecommendPlaylist } from './api';
import { RecommendPlaylist } from './models';
import SongMenuItem from '@/components/song-menu'

interface IProps {
  children?: ReactNode;
}

const HotRecommend:FC<IProps> = () => {

  const [recommendPlaylistData, setRecommendPlaylistData] = useState<RecommendPlaylist[]>([])

    // 获取热门推荐歌单
 useEffect(() => {
  getRecommendPlaylist(10).then(res => {
    setRecommendPlaylistData(res.result)
  })
},[])

  return (
    <RecommendWrapper>
      <AreaHeader 
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink='/discover/songs'
      />
      
      <div className='hot-recommend'>
        {
          recommendPlaylistData.map((item:any) => {
            return (
              <SongMenuItem key={item.id} itemData={item}/>
            )
          })
        }
      </div>
    </RecommendWrapper>
  );
};

export default memo(HotRecommend);