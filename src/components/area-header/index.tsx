import {memo} from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderWrapper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?:string;
}

const AreaHeader:FC<IProps> = (props) => {
  const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '/'} = props

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keywords'>
          {
            keywords.map(item => {
              return(
                <div className='item' key={item}>
                  <span className='text'>{item}</span>
                  <span className='divider'>|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='right'>
        <Link className='more' to={moreLink}>{moreText}</Link>
        <i className='sprite_02 icon'></i>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AreaHeader);