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
  margin: 10px 0px;
  width: 142px;
  height: 142px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomeSec5WorkTool({ innerRefArr }) {
  const isMobile = useIsMobile();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0.2), // 인포팀이 일하는 방법
    1: useScrollFadeIn("up", 3, 0.3), // 팀원으로써
    2: useScrollFadeIn("up", 3, 0.5), // 개발자로써
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
      style={{ minHeight: "700px" }}
      ref={(el) => (innerRefArr.current[4] = el)}
    >
      <div style={{ marginBlock: "50px 40px" }}>
        <T.Title {...animatedItem[0]}>
          인포팀이 <span style={{ fontWeight: "bold" }}>일하는 방법</span>
        </T.Title>
      </div>
      <T.ToolSubTitle {...animatedItem[1]}>팀원으로서</T.ToolSubTitle>
      <ListContainer style={{ marginTop: "15px", marginBottom: "0px" }}>
        {workToolCardImgList.map((item, index) => {
          if (item.category == "teamTool")
            return (
              <div
                style={
                  isMobile
                    ? { margin: "0px 15px 0px" }
                    : index != 0
                    ? { marginLeft: "37.5px" }
                    : {}
                }
              >
                <div {...animatedItem2[index]}>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        padding: "20px",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.WorktoolText style={{ marginBottom: "30px" }}>
                    {item.name}
                  </T.WorktoolText>
                </div>
              </div>
            );
        })}
      </ListContainer>
      <T.ToolSubTitle {...animatedItem[2]}>개발자로서</T.ToolSubTitle>
      <ListContainer style={{ marginTop: "15px", marginBottom: "80px" }}>
        {workToolCardImgList.map((item, index) => {
          if (item.category == "devTool")
            return (
              <div
                style={
                  isMobile
                    ? { margin: "0px 15px 0px" }
                    : index != workToolCardImgList.length - 1
                    ? { marginRight: "37.5px" }
                    : {}
                }
              >
                <div {...animatedItem2[index]}>
                  <WorkToolCard_background>
                    <img
                      src={item.imgSrc}
                      style={{
                        maxWidth: "110px",
                        maxHeight: "110px",
                        padding: "20px",
                      }}
                    />
                  </WorkToolCard_background>
                  <T.WorktoolText>{item.name}</T.WorktoolText>
                </div>
              </div>
            );
        })}
      </ListContainer>
    </SectionContainerCol>
  );
}

export default HomeSec5WorkTool;
