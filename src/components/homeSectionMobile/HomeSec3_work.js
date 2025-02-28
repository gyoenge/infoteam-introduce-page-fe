import React from "react";
import * as T from "../styled/StyledText";
import * as C from "../card/StyledCard";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import {
  ListContainer,
  SectionContainerCol,
} from "../styled/StyledContainerGlobal";
import styled from "styled-components";
import ServiceMobile from "../card/ServiceMobile";
import { serviceInfoList } from "../../data/serviceInfos";

function HomeSec3WorkMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2, 0.65),
    1: useScrollFadeIn("right", 1.5, 0.5),
    2: useScrollFadeIn("right", 1.5, 0.5),
    3: useScrollFadeIn("right", 1.5, 0.5),
  };

  return (
    <SectionContainerCol
      style={{ minHeight: "0px" }}
      ref={(el) => (innerRefArr.current[2] = el)}
    >
      <div style={{ height: "8vw" }}></div>
      <T.Title {...animatedItem[0]}>
        주로 GIST 학생들에게 도움이 되는 <br />
        <span style={{ fontWeight: "bold" }}>웹서비스</span>
        들을 만들고,
      </T.Title>
      {serviceInfoList.map((item, index) => {
        return (
          <div {...animatedItem[index + 1]}>
            <ServiceMobile
              name={item.name}
              info={item.info}
              logoSrc={item.logoSrc}
              page_path={item.pageLink}
              github_path={item.githubLink}
            />
          </div>
        );
      })}
      <div style={{ height: "8vw" }}></div>
    </SectionContainerCol>
  );
}

export default HomeSec3WorkMobile;
