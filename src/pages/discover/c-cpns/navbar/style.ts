import styled from 'styled-components'

export const NavWrapper = styled.div`
    height: 30px;
    background-color: #c2020c;
  
  .nav {
    display:flex;
    padding-left: 180px;
    position: relative;
    top: -4px;
  }

    .item {
      a {
        display: inline-block;
        padding: 0 13px;
        height: 20px;
        line-height: 20px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 14px;
        
        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
          
        }
      }
    
`