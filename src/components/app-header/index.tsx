import React, {memo} from "react";
import type {FC, ReactNode} from "react";
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//应用组件
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

import headerTitles from '@/assets/data/header_titles.json';
interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  
  function showItem(item:any) {
    if (item.type === 'path') {
      return <NavLink to={item.link} className={({ isActive }) => {return isActive ? 'active' : undefined}}>
          {item.path}
          <i className="icon sprite_01"></i>
        </NavLink>
    } else {
      return <a href={item.link} rel="noreferrer" target="_blank">  {item.path}
      </a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item: any) => {
              return (
                <div className="item" key={item.path}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input 
            className="search"
            placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} 
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader);