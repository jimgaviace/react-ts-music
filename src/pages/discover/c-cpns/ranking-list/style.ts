import styled from "styled-components";
import downloadImage from '@/assets/img/recommend-top-bg.png'

export const RankingListWrapper = styled.div`
  .content {
    display: flex;
    height: 472px;
    margin-top: 20px;
    background: url(${downloadImage});
  }
  
  .content_01 {
    width: 230px;
    flex: 1;

    &:last-child {
      width:228px;
    }
  }
  

  .header {
    height: 100px;
    display:flex;

    margin: 20px 0 0 20 px;

    .image {
      width:80px;
      height:80px;
      position: relative;

      img {
        width:80px;
        height:80px;
      }

    }
    
  .info {
    margin: 5px 0 0 10px;

    a {
      font-size: 14px;
      color: #000;
      font-weight:700;
    }

    .btn {
      display: inline-block;
      text-indent: -9999px;
      width:22px;
      height: 22px;
      margin: 8px 10px 0 0;
      cursor:pointer;
    }

    .play {
      background-position: -267px -205px;

      &:hover {
        background-position: -267px -235px;
      }
    }

    .favor {
      background-position: -300px -205px;

      &:hover {
        background-position: -300px -235px;
      }
    }
  }
  .list {
    .item {
      position:relative;
      display:flex;
      height:32px;
      align-items:center;
  
      :nth-child(-n + 3) .rank {
        color:#c10d0c;
      }
  
      .index {
        width:35px;
        text-align:center;
        font-size:16px;
        margin-left;
        display:flex;
      }
  
      .info {
        color: #000;
        width:170px;
        height:17px;
        line-height:17px;
        display:flex;
        justify-content:center;
  
        .name {
          flex: 1;
          display:flex;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          cursor:pointer;
  
          &:hover {
            color:#000;
            text-decoration:underline;
          }
        }
  
        .operator {
          display: flex;
          align-items: center;
          width: 82px;
  
          .btn {
            width:17px;
            height:17px;
            margin-left: 8px;
            cursor: pointer;
          }
  
          .play {
            background-position: -267px -174px;
  
            &:hover {
              background-position: -267px -199px;
            }
          }
  
          .addto {
            position :relative;
            top: 2px;
            background-position: 0 -700px;
          }
  
          .favor {
            background-position: -297px -268px;
          }
        }
      }
  
      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }
}


  .footer {
    display : flex;
    align-items: center;
    justify-content: center;
  }
  
`