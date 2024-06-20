import styled from "styled-components";
import downloadImage1 from '@/assets/img/download.png';
import downloadImage2 from '@/assets/img/banner_sprite.png'
import downloadImage3 from '@/assets/img/wrap-bg.png'

export const BannerWrapper = styled.div`
  background: url('https://p1.music.126.net/DSOev5mD97WhbOGJv8clCA==/109951169636207932.jpg?imageView&blur=40x20')
   center center / 6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }  
`
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height:270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:hover,&.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'http://music.163.com/#/download',
  target:'_blank'
})
`
  width: 254px;
  height: 270px;
  background: url(${downloadImage1});
`


export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position:absolute;
    width: 37px;
    height: 63px;
    background-image: url(${downloadImage2});
    background-color:transparent;
    cursor:pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`

export const RecommendWrapper = styled.div`
  .content {
    border: 1px solid #d3d3d3;
    background-image: url(${downloadImage3});
    display: flex;
  }
`

export const RecommendContent = styled.div`
  background-color: #fff;
  display: flex;
`

export const RecommendLeft = styled.div`   
    padding: 20px;
    width: 729px;
`

export const RecommendRight = styled.div`
      margin-left: 1px;
      width:250px;
`
export const TopBanner =styled.div``