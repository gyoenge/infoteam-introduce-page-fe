import React from "react";
import * as T from "../styled/StyledText";
import WorkEtcCardSet from "../card/WorkEtcCardSet";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";

function HomeSec4WorkEtc({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0.1),
    1: useScrollFadeIn("up", 1.7, 0),
    2: useScrollFadeIn("up", 1.7, 0.2),
    3: useScrollFadeIn("up", 1.7, 0.25),
  };

  return (
    <SectionContainerCol
      style={{ backgroundColor: "#F5F5F5", minHeight: "820px" }}
      ref={(el) => (innerRefArr.current[3] = el)}
    >
      <div style={{ height: "50px" }}></div>
      <T.Title {...animatedItem[0]}>
        그리고 <span style={{ fontWeight: "bold" }}>다른 여러 일들</span>을
        합니다
      </T.Title>
      <WorkEtcCardSet animatedItem={animatedItem} />
    </SectionContainerCol>
  );
}

export default HomeSec4WorkEtc;
