import React from "react";
import * as T from "../components/styled/StyledText";
import { useState, useEffect } from "react";

import {
  ListContainer,
  PageContainer,
  SectionContainerCol,
} from "../components/styled/StyledContainerGlobal";
import Member from "../components/card/Member";
import CheckButton from "../components/button/CheckButton";
import ConditionalMemberList from "../components/card/ConditionalMemberList";
import { memberInfoList } from "../data/memberInfos";

const Page3Members = () => {
  const [isCheckedFE, setIsCheckedFE] = useState(true);
  const [isCheckedBE, setIsCheckedBE] = useState(true);

  return (
    <PageContainer>
      <SectionContainerCol
        style={{
          background: "linear-gradient(to top, #F7F7F7, #F7F7F7)",
          paddingBlock: "0px",
          minHeight: "300px",
        }}
      >
        <T.Title style={{ marginTop: "50px" }}>
          활동중인 <span style={{ fontWeight: "bold" }}>팀원들</span>
        </T.Title>
        <T.SerMemSubTitle style={{ marginBottom: "30px" }}>
          2023년 현재 Infoteam으로 활동하고 있는 팀원들을 소개합니다.
        </T.SerMemSubTitle>
      </SectionContainerCol>
      {/*
      <div
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "70px",
        }}
      >
        <CheckButton
          category="frontend"
          isChecked={isCheckedFE}
          setIsChecked={setIsCheckedFE}
        />
        <CheckButton
          category="backend"
          isChecked={isCheckedBE}
          setIsChecked={setIsCheckedBE}
        />
      </div>
      <MemberList isCheckedFE={isCheckedFE} isCheckedBE={isCheckedBE} />
      */}
      <ListContainer style={{ marginTop: "40px" }}>
        {memberInfoList.map((item) => {
          return (
            <Member
              name={item.name}
              role={item.role}
              email={item.email}
              githubLink={item.githubLink}
              state={item.state}
            />
          );
        })}
      </ListContainer>
    </PageContainer>
  );
};

export default Page3Members;
