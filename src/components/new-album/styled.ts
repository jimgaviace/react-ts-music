import styled from "styled-components";

export const AlbumItemWrapper = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;

    .name {
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .artist {
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`