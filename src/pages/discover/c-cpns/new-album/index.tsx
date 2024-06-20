import {memo, useEffect, useRef,useState} from 'react';
import type { ElementRef, FC, ReactNode } from 'react';
import { NewAlbumWrapper } from './style';
import { Carousel } from 'antd';
import { getNewAlbum } from './api';
import { NewAlbums } from './models';
import AreaHeader from '@/components/area-header';
import NewAlbumItem from '@/components/new-album';

interface IProps {
  children?: ReactNode;
  itemData?: any[];
}

const NewAlbum:FC<IProps> = () => {
  //定义内部数据
  const [newAlbums, setNewAlbums] = useState<NewAlbums[]>([]);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  // 获取热门推荐歌单

  useEffect(() => {
    getNewAlbum().then((res) => {
      setNewAlbums(res.albums);
    });
  },[])
  // 事件处理
  function handlePrevClick() {
    bannerRef.current?.prev();
  }

  function handleNextClick() {
    bannerRef.current?.next();
  }
  return (
    <NewAlbumWrapper>
      <AreaHeader 
        title='新碟上架' 
        moreLink='/discover/album' 
      />
      <div className='content'>
        <button className='sprite_02 arrow arrow-left ' onClick={handlePrevClick}></button>
        <div className='banner'>
          <Carousel ref={bannerRef} dots={false} speed={1000}>
            {
              [0,1].map( item => {
                return (
                  <div key={item}>
                    <div className='album-list'>
                      {newAlbums.slice(item*5, (item+1)*5).map( item => {
                        return <NewAlbumItem key={item.id} itemData={item} />
                      })}
                    </div>
                  </div>
                )})
            }
          </Carousel>
        </div>
        <button className='sprite_02 arrow arrow-right' onClick={handleNextClick}></button>
      </div>
    </NewAlbumWrapper>
  );
};

export default memo(NewAlbum);