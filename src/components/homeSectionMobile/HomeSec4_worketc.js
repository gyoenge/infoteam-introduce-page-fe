import React from "react";
import * as T from "../styled/StyledText";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import WorkEtcCardSetMobile from "../card/WorkEtcCardSetMobile";

function HomeSec4WorkEtcMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0.1), // 그리고 다른 여러 ~~
    1: useScrollFadeIn("up", 2, 0.15), // - 아래 카드들을 ~~~
    2: useScrollFadeIn("right", 1.7, 0), // 그라데이션 호버 카드
    3: useScrollFadeIn("right", 1.7, 0.2),
    4: useScrollFadeIn("right", 1.7, 0.25),
  };

  return (
    <SectionContainerCol
      style={{ backgroundColor: "#F5F5F5", minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[3] = el)}
    >
      <div style={{ height: "8vw" }}></div>
      <T.Title {...animatedItem[0]}>
        그리고 <span style={{ fontWeight: "bold" }}>다른 여러 일들</span>을
        합니다
      </T.Title>
      <T.WorkEtcSubtitleMobile {...animatedItem[1]}>
        - 아래 카드들을 터치하면 설명이 나옵니다 -
      </T.WorkEtcSubtitleMobile>
      <WorkEtcCardSetMobile animatedItem={animatedItem} />
    </SectionContainerCol>
  );
}

export default HomeSec4WorkEtcMobile;
