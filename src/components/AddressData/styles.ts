import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

export const DataContainer = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 0 0 4px 4px;
  padding: 10px;
  background-color: #fff;
`;

export const Address = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #0083ca;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #0083ca;
  margin-bottom: 10px;
`;

export const Details = styled.span`
  font-size: 14px;
  color: #333;
  line-height: 18px;
`;
