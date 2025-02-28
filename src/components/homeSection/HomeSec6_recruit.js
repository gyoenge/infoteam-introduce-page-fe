import React from "react";
import styled from "styled-components";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import * as T from "../styled/StyledText";

const HorizonLine = styled.div`
  margin: 10px 0px;
  width: 85%;
  border-bottom: 2px solid #000000;
`;

const LittleInput = styled.input`
  margin: 10px;
  padding: 20px;
  width: 237.5px;
  height: 25px;

  border: none;
  border-radius: 15px;

  ${T.FormText.componentStyle.rules[0]}

  &:focus {
    outline: 0px solid #ff6565;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  }
  &::placeholder {
    color: #ad1717;
  }
`;
const LargeInput = styled.textarea`
  margin: 10px;
  padding: 20px;
  width: 832.5px;
  height: 250px;

  resize: none;

  border: none;
  border-radius: 15px;

  vertical-align: top;
  ${T.FormText.componentStyle.rules[0]}

  &:focus {
    outline: 0px solid #ff6565;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
  }
  &::placeholder {
    color: #000000;
  }
`;

const SubmitButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: #4d4d4d;
  border-radius: 10px;
  border: none;

  ${T.FormText.componentStyle.rules[0]}
  font-weight: normal;
  color: white;

  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #757575;
  }
  &:active {
    width: 105px;
    height: 38px;
  }
`;

function HomeSec6Recruit({ innerRefArr }) {
  return (
    <SectionContainerCol
      style={{ backgroundColor: "#F5F5F5", minHeight: "700px" }}
      ref={(el) => (innerRefArr.current[5] = el)}
    >
      <T.Title style={{ marginBottom: "50px", fontSize: "50px" }}>
        인포팀에 바로 <span style={{ fontWeight: "bold" }}>지원</span>하기
      </T.Title>
      <HorizonLine />
      <T.FormText style={{ marginBottom: "40px" }}>
        새로고침하면, 작성 중인 내용이 사라집니다
      </T.FormText>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <LittleInput placeholder="이름 *" />
          <LittleInput placeholder="학번 *" />
          <LittleInput placeholder="전화번호 *" />
        </div>
        <LargeInput placeholder="개발에 참여하신 경험이 있으시면 적어주세요" />
        <LargeInput placeholder="하시고 싶으신 말이 있다면 적어주세요" />
      </div>
      <div style={{ height: "50px" }}>
        <SubmitButton>제출하기</SubmitButton>
      </div>
    </SectionContainerCol>
  );
}

export default HomeSec6Recruit;
