import {memo} from 'react';
import type { FC, ReactNode } from 'react';
import { SettleSingerWrapper } from './style';
import  AreaHeaderV2  from '@/components/area-headerV2';
import { getAritistList } from './api';
import { AritistList } from './models';
import { useEffect, useState} from 'react';
import { formatImageSize } from "@/utils/format";


interface IProps {
  children?: ReactNode;
}

const SettleSinger:FC<IProps> = () => {
  const [AritistListData, setAritistListData] = useState<AritistList[]>([])

  useEffect(() => {
    getAritistList(10).then(res => {
      setAritistListData(res.artists)
    })
  },[])

  return (
    <SettleSingerWrapper>
      <AreaHeaderV2 
        title='入住歌手' 
        moreText='查看全部&gt;'
        moreLink='#/discover/artist'
      />
      <div className='artists'>
        {
          AritistListData.map((item:any) => {
            return (
              <a href="#/discover/artist" key={item.id} className='item'>
                <img src={formatImageSize(item.picUrl, 80)} alt="" />
                <div className='info'>
                  <div className='name' >{item.name}</div>
                  <div className='alias' >{item.alias.join(' ')}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className='apply-for'>
        <a href="#/">申请成为音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
};

export default memo(SettleSinger);