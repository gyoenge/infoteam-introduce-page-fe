import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";

const AboutButtonWrap = styled.div`
  width: 120px;
  height: 50px;
  background-image: linear-gradient(to left, #ff9d9d, #ff6565, #ff9d9d);
  background-size: 200%;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-position 0.6s, width 0.3s, height 0.3s;
  &:hover {
    background-position: right;
  }
  &:active {
    background-position: right;
    width: 130px;
    height: 55px;
  }
`;

function AboutButton({ secRefArr }) {
  const [secRefCur, setSecRefCur] = useState(null);
  const moveToSec = (secRefCur) => {
    if (secRefCur) {
      secRefCur.scrollIntoView({ behavior: "smooth", block: "start" }); // safari behavior: "smooth" 오류 있다고 함.
    }
  };
  useEffect(() => {
    const secRefCur = secRefArr.current[1];
    setSecRefCur(secRefCur);
  }, []);
  return (
    <div style={{ height: "45px" }}>
      <AboutButtonWrap onClick={() => moveToSec(secRefCur)}>
        <T.AboutButtonText>더 알아보기</T.AboutButtonText>
      </AboutButtonWrap>
    </div>
  );
}

export default AboutButton;
