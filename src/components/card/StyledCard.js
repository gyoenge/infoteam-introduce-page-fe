import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";

/* (gray; #fafafa, red ; #FF6565) */

/* Home cards - work 1 (devWork) */
export const RedRoundRectCard = styled.div`
  position: relative;
  z-index: 0;

  margin: 25px 35px;
  width: 243px;
  height: 160px;
  background-image: linear-gradient(0, #ff6565, #ff6565);
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;

  &::before {
    position: absolute;
    content: "";
    inset: 0 0 0 0;
    z-index: -1;

    border-radius: 50px;
    background-image: linear-gradient(
      160deg,
      #ffb0b0,
      #ff9d9d,
      #ff7f7f,
      #ff6565
    );
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover::before {
    opacity: 1;
  }
`;

export const RedRoundRectCardMobile = styled.div`
  margin: 4vw 6vw;
  width: 40.5vw;
  height: 26.6vw;
  background-color: #ff6565;
  border-radius: 8.3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;
