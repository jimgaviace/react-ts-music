import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size:14px;
  color:#fff;

  .content {
    display: flex; /* 水平布局 */
    justify-content: space-between;

  } 

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
  `;

export const HeaderLeft = styled.div`
display: flex;
align-items: center;

.logo {
  display: block;
  width: 176px;
  height: 70px;
  background-position: 0 0;
  text-indent: -9999px;
}

.title-list {
  display: flex;
  line-height: 70px;
  .item {
    position: relative;

    a {
      display: block;
      color: #ccc;
      padding: 0 20px;

      }

      :last-of-type a {
        position: relative;
        ::after {
          content: "";
          position: absolute;
          right: -15px;
          top: 20px;
          transform: translate(-50%);
          width: 1px;
          height: 22px;
          background-image: url('../assets/img/sprite_01.png');
          background-position: -190px 0;
        }
      }


      &:hover a,
      .active {
        color: #fff;
        background:#000;
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 12px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%);
        background-position: -226px 0;
      }
      }
    }
  }
}
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    
    input {
      $::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    border-radius: 16px;
    margin: 0 10px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    color: #aaa;
    cursor: pointer;
  }
`