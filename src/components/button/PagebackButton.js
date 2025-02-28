import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as T from "../styled/StyledText";
import pagebackIcon from "../../imgs/buttonImgs/pageback.svg";

const PagebackButtonWrap = styled.div`
  align-self: flex-start;
  margin-left: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const PageupIcon = styled.img`
  margin: 3px 10px 0px;
  width: 18px;
`;

function PagebackButton() {
  const navigate = useNavigate();
  return (
    <PagebackButtonWrap onClick={() => navigate("/")}>
      <PageupIcon src={pagebackIcon}></PageupIcon>
      <T.PageBackButtonText>홈</T.PageBackButtonText>
    </PagebackButtonWrap>
  );
}

export default PagebackButton;
