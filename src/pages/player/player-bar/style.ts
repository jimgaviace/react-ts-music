import styled from "styled-components";
import download from "@/assets/img/progress_bar.png";
import download1 from "@/assets/img/sprite_icon.png";
import download2 from "@/assets/img/pip.png";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const BarControl = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor : pointer;
  }

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -165px; 
  }

  .next {
    background-position: -80px -130px;
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${download}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${download}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -9px;
          background: url(${download1}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const BarOperator = styled.div`
  display: flex;
    position: relative;
    top: 5px;

    .btn {
      width: 25px;
      height: 25px;
    }

    .pip {
      background: url(${download2}) right 0;
    }

    .favor {
      background-position: -88px -163px;
    }

    .share {
      background-position: -114px -163px;
    }

    .right {
      display: flex;
      align-items: center;
      width: 126px;
      padding-left: 13px;
      background-position: -147px -248px;
      
      .volume {
        background-position: -2px -248px;
      }

      .loop {
        background-position: -66px -248px;
      }

      .playlist {
        padding-left: 18px;
        text-align: center;
        color: #ccc;
        width: 59px;
        background-position: -42px -68px;
      }
    }
`