import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`;

export const Repository = styled.div`
    width: 250px;
    height: 380px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #333;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

      strong {
        font-size: 24px;
        margin-top: 10px;
      }
      small {
        font-size: 14px;
        color:#666;
      }

      img {
        width: 65px;
      }
  }

  ul {
    list-style: none;

    li {
      font-weight bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1){
        background: #f5f5f5;
      }
    }
  }



`;