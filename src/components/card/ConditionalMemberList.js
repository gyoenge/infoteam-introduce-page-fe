import React from "react";
import { useState, useEffect } from "react";
import Member from "./Member";
import { memberInfoList } from "../../data/memberInfos";
import { ListContainer } from "../styled/StyledContainerGlobal";

function ConditionalMemberList({ isCheckedFE, isCheckedBE }) {
  const [conditionalMemberList, setConditionalMemberList] =
    useState(memberInfoList);

  useEffect(() => {
    setConditionalMemberList(
      memberInfoList.filter(
        (item) =>
          (isCheckedFE && item.role == "frontend") ||
          (isCheckedBE && item.role == "backend")
      )
    );
    return () => {};
  }, [isCheckedFE, isCheckedBE]);

  return (
    <ListContainer style={{ marginTop: "40px" }}>
      {conditionalMemberList.map((item) => {
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
  );
}

export default ConditionalMemberList;
