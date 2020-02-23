import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2ec8f7),
    to(#0a88f7)
  );
  background: linear-gradient(90deg, #2ec8f7, #0a88f7);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 0 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`;
