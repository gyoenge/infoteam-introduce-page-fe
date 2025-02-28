import styled from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

export const PageContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  /*max-width: 1400px;
  padding: 32px 0;  */
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    padding-bottom: 20vh;
  }
`;

export const SectionContainerCol = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); // 전체화면시 약 700px?

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  margin: 0 auto;
  margin-block: 30px;
  width: 900px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 100%;
  }
`;
