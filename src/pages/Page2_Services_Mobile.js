import React from "react";
import styled from "styled-components";
import * as T from "../components/styled/StyledText";
import {
  PageContainer,
  SectionContainerCol,
} from "../components/styled/StyledContainerGlobal";
import Service from "../components/card/Service";
// import { ServiceList } from "../data/serviceDummy";
import { serviceInfoList } from "../data/serviceInfos";
import PagebackButton from "../components/button/PagebackButton";

const HorizonLine = styled.div`
  width: 100%;
  border-bottom: 1.3px solid #000000;
`;

// title div gray gradient initial : linear-gradient(to top, #F7F7F7, #FFFFFF)
const Page2ServicesMobile = () => {
  return (
    <PageContainer>
      <SectionContainerCol
        style={{
          background: "linear-gradient(to top, #F7F7F7, #F7F7F7)",
          paddingBlock: "0px",
          minHeight: "300px",
        }}
      >
        <PagebackButton />
        <T.Title style={{ marginTop: "50px" }}>
          운영중인 <span style={{ fontWeight: "bold" }}>서비스들</span>
        </T.Title>
        <T.SerMemSubTitle style={{ marginBottom: "30px" }}>
          Infoteam이 개발하여 운영중인 서비스들을 소개합니다.
        </T.SerMemSubTitle>
      </SectionContainerCol>
      <div style={{ height: "45px" }} />
      {serviceInfoList.map((item, index) => {
        return (
          <div>
            {index != 0 && null /* <HorizonLine /> */}
            <Service
              name={item.name}
              info={item.info}
              image_path={item.imgSrc}
              page_path={item.pageLink}
              github_path={item.githubLink}
            />
          </div>
        );
      })}
    </PageContainer>
  );
};

export default Page2ServicesMobile;
