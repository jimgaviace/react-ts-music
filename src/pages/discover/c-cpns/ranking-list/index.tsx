import React, {memo} from "react";
import { useEffect, useState } from "react";
import type {FC, ReactNode} from "react";
import { RankingListWrapper } from "./style";
import { getRankingList } from './api';
import { RankingLists } from "./models";
import AreaHeader from "@/components/area-header";
import { formatImageSize } from "@/utils/format";

// import { RankingItemWrapper } from "./style";
// import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const RankingList: FC<IProps> = () => {
  //定义数据state
  const rankingIds = [19723756,3779629,2884035];
  const [rankingList, setRankingList] = useState<RankingLists[]>([]);
  //方法1
  // useEffect(() => {
  //   for (const id of rankingIds){
  //     getRankingList(id).then(res => {
  //       switch (id) {
  //         //处理数据 独立加载 不用等待 各自管理 
  //         case 19723756:
  //           console.log(res)
  //           break;
  //         case 3779629:
  //           console.log(res)
  //           break;
  //         case 2884035:
  //           console.log(res)
  //           break;
  //       }
  //     });
  //   }
  // },[])
  //获取数据方式2 有顺序  (推荐)**

  // useEffect(() => {
  //   const promises: Promise<any>[] = [];
  //   for (const id of rankingIds){
  //     promises.push(getRankingList(id));
      
  //   }
  //   Promise.all(promises).then(res => {
  //     console.log(res)
                                            
  //     const res1 = res.map((item:any) => item.playlist);
  //     console.log(res1);
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },[]);

  //获取数据方式3 并发请求 没有顺序 各自管理
  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = rankingIds.map(id => getRankingList(id));
        const res = await Promise.all(promises);
        const res1 = res.map((item:any) => item.playlist);
        setRankingList(res1);
      }
      catch (error) {
        console.log(error);
        
      }
    };
    fetchData();
  }, []);

//   let { rankings } = useAppSelector((state) => ({
//     rankings: state.recommend.rankingList
// })) 

  return (
    <RankingListWrapper>
      <AreaHeader title='榜单' moreLink="/discover/ranking"/>
        <div className="content">
          {/* <RankingItemWrapper > */}
              {
                rankingList.map((item) => {
                  return (
                    <div key={item.id} className="content_01">
                      <div className="header">
                        <img src={formatImageSize(item.coverImgUrl,80)} alt="" />
                        <a href="" className="sprite_cover"></a>
                          <div className="info">
                            <div className="name">{item.name}</div>
                            <div>
                              <button className="sprite_02 btn play"></button>
                              <button className="sprite_02 btn favor"></button>
                            </div>
                          </div>
                      </div>
                      <div className="list">
                        {
                          item.tracks.slice(0,8).map((item:any, index: number) => {
                            return (
                              <div className="item list" key={item.id}>
                                <div className="index">{index + 1}
                                <div className="info">
                                <div className="name">{item.name}</div>
                                  <div className="operator">
                                    <button className="sprite_02 btn play"></button>
                                    <button className="sprite_icon2 btn addto"></button>
                                    <button className="sprite_02 btn favor"></button>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="footer">
                        <a href="/#discover/ranking">查看全部 &gt;</a>
                      </div>
                    </div>
                  )
                })
              }
          {/* </RankingItemWrapper> */}
        </div>
    </RankingListWrapper>

  )
}

export default memo(RankingList);