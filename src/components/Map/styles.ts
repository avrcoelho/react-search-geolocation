import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-map-pin {
    color: #ff253a;
  }
`;

export const ContainerMap = styled.div``;

export const Error = styled.span`
  color: #999;
  font-size: 18px;
`;
