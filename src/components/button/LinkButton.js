import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import githubIcon from "../../imgs/buttonImgs/githubIcon.svg";
import webpageIcon from "../../imgs/buttonImgs/webpageIcon.svg";
import {
  useIsMobile,
  MEDIA_QUERY_WIDTH_MOBILE_WIDTH,
} from "../../hooks/useIsMobile";

const LinkButtonWrap = styled.div`
  margin: 0px 35px;

  width: 110px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin: 1vw 0vw;
    width: 18vw;
    height: 6vw;
    border-radius: 3vw;
  }
`;

function LinkButton({ category, linkpath }) {
  const isMobile = useIsMobile();
  const iconSelect = (category) => {
    switch (category) {
      case "github":
        return (
          <img
            src={githubIcon}
            style={
              isMobile
                ? { width: "2.9vw", marginRight: "1.4vw" }
                : { width: "20px", marginRight: "8px" }
            }
          ></img>
        );
      case "page":
        return (
          <img
            src={webpageIcon}
            style={
              isMobile
                ? { width: "3.6vw", paddingTop: "0.3vw", marginRight: "1vw" }
                : { width: "22px", paddingTop: "2px", marginRight: "6px" }
            }
          ></img>
        );
      default:
        return null;
    }
  };
  if (category == "github_profile")
    return (
      <LinkButtonWrap
        onClick={() => window.open(linkpath, "_blank")}
        style={{
          width: "150px",
          height: "28px",
          paddingBottom: "2px",
          marginTop: "6px",
        }}
      >
        <img
          src={githubIcon}
          style={{ width: "20px", marginRight: "8px", paddingTop: "2px" }}
        ></img>
        <T.LinkButtonText style={{ fontSize: "13px" }}>
          go to github
        </T.LinkButtonText>
      </LinkButtonWrap>
    );
  return (
    <LinkButtonWrap onClick={() => window.open(linkpath, "_blank")}>
      {iconSelect(category)}
      <T.LinkButtonText>{category}</T.LinkButtonText>
    </LinkButtonWrap>
  );
}

export default LinkButton;
