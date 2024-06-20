import React, {memo} from "react";
import type {FC, ReactNode} from "react";
import AppPlayerBar from './player-bar'

interface IProps {
  children?: ReactNode;
}

const Player: FC<IProps> = () => {
  return (
    <AppPlayerBar>
      
    </AppPlayerBar>
  )
}

export default memo(Player);