import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../components/styled/StyledContainerGlobal";
import notFoundIcon from "../imgs/notFoundIcon.svg";

const LinkButtonWrap = styled.div`
  margin: 10px 35px;

  width: 330px;
  height: 50px;
  background-color: #e5e5e5;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;

  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #959595;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  }
`;

const PageXNotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <img
        src={notFoundIcon}
        style={{ width: "350px", padding: "20px", marginTop: "100px" }}
      />
      <LinkButtonWrap onClick={() => navigate("/")}>
        메인 페이지로 이동
      </LinkButtonWrap>
    </PageContainer>
  );
};

export default PageXNotFound;
