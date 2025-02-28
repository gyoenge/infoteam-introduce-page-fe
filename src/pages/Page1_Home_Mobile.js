import React, { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer } from "../components/styled/StyledContainerGlobal";
import HomeSec1MainMobile from "../components/homeSectionMobile/HomeSec1_main";
import HomeSec2InfoMobile from "../components/homeSectionMobile/HomeSec2_info";
import HomeSec3WorkMobile from "../components/homeSectionMobile/HomeSec3_work";
import HomeSec4WorkEtcMobile from "../components/homeSectionMobile/HomeSec4_worketc";
import HomeSec5WorkToolMobile from "../components/homeSectionMobile/HomeSec5_worktool";
// import PageupButton from "../components/button/PageupButton";
// import HomeSec6Recruit from "../components/homeSection/HomeSec6_recruit";
// import useMoveScroll from "../hooks/useMoveScroll";
// import HomeSecTest from "../components/homeSection/HomeSecTest_Move";

/* Page1HomeMobile */
const Page1HomeMobile = () => {
  const secRefArrLength = 5;
  const secRefArr = useRef([]);

  // return ---------------------------------------------------------------------
  return (
    <PageContainer>
      <HomeSec1MainMobile innerRefArr={secRefArr} />
      <HomeSec2InfoMobile innerRefArr={secRefArr} />
      <HomeSec3WorkMobile innerRefArr={secRefArr} />
      <HomeSec4WorkEtcMobile innerRefArr={secRefArr} />
      <HomeSec5WorkToolMobile innerRefArr={secRefArr} />
    </PageContainer>
  );
};

export default Page1HomeMobile;
