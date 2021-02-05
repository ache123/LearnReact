
import styled from 'styled-components';

// 这里的div是一个函数，返回值是一个带样式的div组件
export const HomeWrapper = styled.div`
  font-size: 50px;
  color:red;

  .banner {
    background-color: blue;

    span {
      color: white;

      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "aaa"
      }
    }

    /* .active {
      color: red;
    } */
  }
`

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`