import styled from 'styled-components';
import InputMask from 'react-text-mask';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 0 10px;

  &:after {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #fcd000),
      color-stop(17%, #ff8a00),
      color-stop(34%, #ff253a),
      color-stop(51%, #ff37a8),
      color-stop(67%, #a400e1),
      color-stop(83%, #0086ff),
      to(#00d604)
    );
    background: linear-gradient(
      90deg,
      #fcd000 0,
      #ff8a00 17%,
      #ff253a 34%,
      #ff37a8 51%,
      #a400e1 67%,
      #0086ff 83%,
      #00d604
    );
    bottom: -5px;
    content: '';
    display: block;
    height: 5px;
    position: absolute;
    width: 100%;
  }
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
