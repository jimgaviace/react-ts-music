import React, { FC, ReactNode } from 'react'

interface IProps {
  children?:ReactNode
  itemData:any

}

export const Songitem:FC<IProps> = (props) => {
  
  const { itemData } = props

  return (
    <div>
      <div className="1">
        <img src={itemData.picUrl} alt="" />
        <div className='bg-cover '>
          <div>
            <span className='2'>播放量：{itemData.playCount}</span>
          </div>
        </div>
      </div>
      <div className="3">
        {itemData.name}
      </div>
    </div>
  )
}
