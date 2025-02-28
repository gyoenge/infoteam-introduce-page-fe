import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import LinkButton from "../button/LinkButton";
import emailIcon from "../../imgs/buttonImgs/emailIcon.svg";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const MemberContainer = styled.div`
  width: 33.33%;
  margin-block: 15px;
  flex-grow: 0;

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 50%;
    max-width: 350px;
  }
`;

const MemberCard = styled.div`
  margin: 0 auto;

  width: 270px;
  height: 160px;
  background-color: #f5f5f5;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 80%;
    max-width: 270px;
  }
`;

const HorizonLine = styled.div`
  width: 90%;
  border-bottom: 1.3px solid #000000;
  margin-top: 5px;
  margin-bottom: 17px;
`;

function Member({ name, role, email, githubLink, state }) {
  return (
    <MemberContainer>
      <MemberCard>
        <T.MemberName>
          {name}
          &nbsp;&nbsp;&nbsp;
          <T.MemberInfo style={{ fontSize: "16px" }}>{role}</T.MemberInfo>
        </T.MemberName>

        <HorizonLine />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={emailIcon}
            style={{ width: "20px", marginRight: "7px", paddingTop: "2px" }}
          ></img>
          <T.MemberInfo style={{}}>{email}</T.MemberInfo>
        </div>
        <LinkButton
          category="github_profile"
          linkpath={githubLink}
        ></LinkButton>
      </MemberCard>
    </MemberContainer>
  );
}

export default Member;
