import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import LinkButton from "../button/LinkButton";

const ServiceContainer = styled.div`
  margin: 5vw 0px;
  width: 70vw;
  min-height: 20vw;

  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;
const ServiceLeft = styled.div`
  margin: 3vw 0vw;
  width: 30vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ServiceRight = styled.div`
  margin: 0vw 0vw 0vw 7vw;
  width: 33vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServiceLogo = styled.img`
  margin-bottom: 2vw;
  height: 8vw;
`;

function ServiceMobile({ name, info, logoSrc, page_path, github_path }) {
  return (
    <ServiceContainer>
      <ServiceLeft>
        <ServiceLogo src={logoSrc} />
        {page_path != "" && (
          <LinkButton category="page" linkpath={page_path}></LinkButton>
        )}
        {github_path != "" && (
          <LinkButton category="github" linkpath={github_path}></LinkButton>
        )}
      </ServiceLeft>
      <ServiceRight>
        <T.ServiceInfoMobile>{info}</T.ServiceInfoMobile>
      </ServiceRight>
    </ServiceContainer>
  );
}

export default ServiceMobile;
