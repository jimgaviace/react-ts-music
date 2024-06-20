import {memo} from 'react';
import type { FC, ReactNode } from 'react';
import { LoginWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const UserLogin:FC<IProps> = () => {
  return (
    <LoginWrapper className='sprite_02'>
      <p className='desc '>
        登录HwMusic，包月享受无限乐趣，并且同步分享到手机
      </p>
      <a href="#/login" className='sprite_02'>用户登录</a>
    </LoginWrapper>
  );
};

export default memo(UserLogin);