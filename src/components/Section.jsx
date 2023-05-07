import React from 'react';
import styled from 'styled-components';
//import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Section({
  title,
  subtitle,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </ItemText>
      <ButtonGroup>
        <LeftBtn>{leftBtnText}</LeftBtn>
        {rightBtnText && <RightBtn>{rightBtnText}</RightBtn>}
      </ButtonGroup>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  backgound-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 80px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftBtn = styled.div`
  background-color: #3b3e41;
  color: #e6e6e4;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  font-size: 12px;
  cursor: pointer;
  margin: 0 13px;
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;
const RightBtn = styled(LeftBtn)`
  background-color: #e6e6e4;
  color: #3b3e41;
`;
