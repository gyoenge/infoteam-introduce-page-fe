import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import { workToolCardImgList } from "../../data/workToolCardImgs";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import { useIsMobile } from "../../hooks/useIsMobile";

// gray #fbfbfb white #ffffff
const WorkToolCard_background = styled.div`
  margin: 1.6vw 0px;
  width: 20vw;
  height: 20vw;
  background-color: #ffffff;
  border-radius: 3.5vw;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeSec5WorkToolMobile({ innerRefArr }) {
  const isMobile = useIsMobile();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0.2), // 인포팀이 일하는 방법
    1: useScrollFadeIn("up", 3, 0.3), // 팀원으로써
    2: useScrollFadeIn("up", 3, 0.68), // 개발자로써
  };
  const animatedItem2 = {
    0: useScrollFadeIn("up", 2, 0.3), // work tool img 용 (1) - team
    1: useScrollFadeIn("up", 2, 0.37),
    2: useScrollFadeIn("up", 2, 0.44),
    3: useScrollFadeIn("up", 2, 0.51),
    4: useScrollFadeIn("up", 2, 0.58),
    5: useScrollFadeIn("up", 2, 0.5), // work tool img 용 (2) - dev
    6: useScrollFadeIn("up", 2, 0.57),
    7: useScrollFadeIn("up", 2, 0.64),
    8: useScrollFadeIn("up", 2, 0.71),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[4] = el)}
    >
      <div style={{ height: "8vw" }}></div>
      <T.Title {...animatedItem[0]}>
        인포팀이 <span style={{ fontWeight: "bold" }}>일하는 방법</span>
      </T.Title>
      <T.ToolSubTitle {...animatedItem[1]}>팀원으로서</T.ToolSubTitle>
      <ListContainer
        style={{ width: "75vw", marginTop: "2vw", marginBottom: "0px" }}
      >
        {workToolCardImgList.map((item, index) => {
          if (item.category == "teamTool")
            return (
              <div style={{ margin: "0px 2.5vw 0px" }}>
                <div {...animatedItem2[index]}>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "14.5vw",
                        maxHeight: "14.5vw",
                        padding: "3vw",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.WorktoolText style={{ marginBottom: "2vw" }}>
                    {item.name}
                  </T.WorktoolText>
                </div>
              </div>
            );
        })}
      </ListContainer>
      <T.ToolSubTitle {...animatedItem[2]}>개발자로서</T.ToolSubTitle>
      <ListContainer
        style={{
          width: "70vw",
          marginTop: "2vw",
          marginBottom: "0px",
        }}
      >
        {workToolCardImgList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div style={{ margin: "0px 2.5vw 0px" }}>
                <div {...animatedItem2[index]}>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "14.5vw",
                        maxHeight: "14.5vw",
                        padding: "2vw",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.WorktoolText style={{ marginBottom: "2vw" }}>
                    {item.name}
                  </T.WorktoolText>
                </div>
              </div>
            );
        })}
      </ListContainer>
    </SectionContainerCol>
  );
}

export default HomeSec5WorkToolMobile;
