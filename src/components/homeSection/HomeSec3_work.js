import React from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styled/StyledText";
import * as C from "../card/StyledCard";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import { useIsMobile } from "../../hooks/useIsMobile";
import WorkCardSet from "../card/WorkCardSet";

function HomeSec3Work({ innerRefArr }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0),
    1: useScrollFadeIn("up", 2, 0.2),
    2: useScrollFadeIn("up", 2, 0.4),
    3: useScrollFadeIn("up", 2, 0.6),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "680px" }}
      ref={(el) => (innerRefArr.current[2] = el)}
    >
      <T.Title {...animatedItem[0]}>
        주로 GIST 학생들에게 도움이 되는 <br />
        <span style={{ fontWeight: "bold" }}>웹서비스</span>
        들을 만들고,
      </T.Title>
      <WorkCardSet animatedItem={animatedItem} />
      {/* <ListContainer style={{ marginBottom: "80px" }}>
        <div {...animatedItem[1]}>
          <C.RedRoundRectCard style={isMobile ? {} : { marginLeft: "15px" }}>
            GISTORY
          </C.RedRoundRectCard>
        </div>
        <C.RedRoundRectCard {...animatedItem[2]}>AMS</C.RedRoundRectCard>
        <div {...animatedItem[3]}>
          <C.RedRoundRectCard style={isMobile ? {} : { marginRight: "15px" }}>
            GISTALK
          </C.RedRoundRectCard>
        </div>
      </ListContainer> */}
      <div style={{ height: "15px" }}>
        <T.LinkText onClick={() => navigate("/service")}>
          &gt;&gt; 자세히 보러가기
        </T.LinkText>
      </div>
      <div style={isMobile ? { height: "100px" } : { height: "50px" }} />
    </SectionContainerCol>
  );
}

export default HomeSec3Work;
