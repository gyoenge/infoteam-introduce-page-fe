import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import LinkButton from "../button/LinkButton";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const ServiceContainer = styled.div`
  display: flex;
  margin: 85px 0px;

  max-width: 885px;
  width: 80vw;

  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;
const ServiceRight = styled.div`
  margin: 20px 0px;
  justify-content: center;
  max-width: 700px;

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin: 40px 0px;
  }
`;

const ServiceImg = styled.img`
  margin-right: 70px;
  min-width: 270px;
  min-height: 270px;
  width: 270px;
  height: 270px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-right: 0px;
  }
`;

function Service({ name, info, image_path, page_path, github_path }) {
  return (
    <ServiceContainer>
      <ServiceImg src={image_path} />
      <ServiceRight>
        <T.ServiceName>{name}</T.ServiceName>
        <T.ServiceInfo>{info}</T.ServiceInfo>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {page_path != "" && (
            <LinkButton category="page" linkpath={page_path}></LinkButton>
          )}
          {github_path != "" && (
            <LinkButton category="github" linkpath={github_path}></LinkButton>
          )}
        </div>
      </ServiceRight>
    </ServiceContainer>
  );
}

export default Service;
