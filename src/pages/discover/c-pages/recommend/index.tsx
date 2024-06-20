import {memo, useState, useEffect, useRef} from 'react';
import type { FC, ReactNode, ElementRef } from 'react';
import { Banner } from './models';
import { getBanner } from './api'
import { Carousel } from 'antd';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper, RecommendLeft, RecommendRight,RecommendWrapper,TopBanner } from './style';
import classNames from 'classnames';
import HotRecommend from '../../c-cpns/hot-recommend';
import NewAlbum from '../../c-cpns/new-album';
import RankingList from '../../c-cpns/ranking-list';
import UserLogin from '../../c-cpns/user-login';
import SettleSinger from '../../c-cpns/settle-singer';
import HotAnchor from '../../c-cpns/hot-anchor';

interface IProps {
  children?: ReactNode;
}

const Recommend:FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [bannerData, setBannerData] =useState<Banner[]>([])

//定义类型？
  const bannerRef = useRef<ElementRef<typeof Carousel>>()

  //测试网络请求 只加载一次减少网络请求
  useEffect(() => {
    getBanner().then(res => {
      setBannerData(res.banners)
    })
  },[])

  //事件处理函数
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  //获取背景图片
  let bgImageUrl = bannerData[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }
  // console.log(bgImageUrl)

  return (
    <div>
      <BannerWrapper style={{ 
            background: `url('${bgImageUrl}')
            center center / 6000px`
        }}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel 
              autoplay 
              ref={bannerRef} 
              effect='fade' 
              dots={true}
              afterChange={handleAfterChange}>
              {
                bannerData.map(item => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img 
                            className="image"
                            src={item.imageUrl} 
                            alt={item.typeTitle} />
                    </div>
                  )
                })
              }
            </Carousel>
            <ul className='dots'>
              {
                bannerData.map((item, index) => {
                  return(
                    <li key={item.imageUrl}>
                      <span 
                        className={classNames('item', {
                          active: index === currentIndex
                        })}
                      ></span>
                    </li>
                  )
                })
              }
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className='btn left' onClick={handlePrevClick}></button>
            <button className='btn right'onClick={handleNextClick}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
      <RecommendWrapper>
        
        <TopBanner />
        
        <div className='content wrap-v2'>
          
          <RecommendLeft>
            <HotRecommend />
            <NewAlbum />
            <RankingList />
          </RecommendLeft>
          <RecommendRight>
            <UserLogin />
            <SettleSinger />
            <HotAnchor />
          </RecommendRight>
        </div>
      </RecommendWrapper>
    </div>
  );
};

export default memo(Recommend);