import React, { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer } from "../components/styled/StyledContainerGlobal";
import HomeSec1Main from "../components/homeSection/HomeSec1_main";
import HomeSec2Info from "../components/homeSection/HomeSec2_info";
import HomeSec3Work from "../components/homeSection/HomeSec3_work";
import HomeSec4WorkEtc from "../components/homeSection/HomeSec4_worketc";
import HomeSec5WorkTool from "../components/homeSection/HomeSec5_worktool";

import useScrollSnap from "react-use-scroll-snap";
// import PageupButton from "../components/button/PageupButton";
// import HomeSec6Recruit from "../components/homeSection/HomeSec6_recruit";
// import useMoveScroll from "../hooks/useMoveScroll";
// import HomeSecTest from "../components/homeSection/HomeSecTest_Move";

/* Page1Home */
const Page1Home = () => {
  const secRefArrLength = 5;
  const secRefArr = useRef([]);

  // return ---------------------------------------------------------------------
  return (
    <PageContainer>
      <HomeSec1Main innerRefArr={secRefArr} />
      <HomeSec2Info innerRefArr={secRefArr} />
      <HomeSec3Work innerRefArr={secRefArr} />
      <HomeSec4WorkEtc innerRefArr={secRefArr} />
      <HomeSec5WorkTool innerRefArr={secRefArr} />
    </PageContainer>
  );
};

export default Page1Home;
