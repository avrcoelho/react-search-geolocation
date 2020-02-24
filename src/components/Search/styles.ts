import styled from 'styled-components';
import InputMask from 'react-text-mask';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0 10px;
  position: absolute;
  z-index: 3;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  border-radius: 4px 4px 0 0;
  padding: 10px;
  background-color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled(InputMask)`
  height: 36px;
  width: 100%;
  max-width: 150px;
  border-radius: 6px 0 0 6px;
  border: solid 1px #ccc;
  padding: 0 12px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 0 6px 6px 0;
  background-color: #0083ca;
  border: none;
  cursor: pointer;

  i {
    font-size: 20px;
    color: #fff;
  }
`;

export const InvalidMessage = styled.span`
  font-size: 12px;
  color: #f00;
`;
