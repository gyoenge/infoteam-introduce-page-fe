import styled, { keyframes, css } from "styled-components";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

/* Header text */
export const HeaderMenuText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  color: black;
  text-decoration: none;
  font-weight: normal;
  font-size: 18px;
`;

/* Home sec 1 */
export const InfoteamLogo = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 8px;
  font-size: 130px;
  font-weight: bold;
  text-align: center;
`;
export const LogoUnderText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 25px 35px;
  line-height: 130%;
  font-size: 28px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 15px 35px;
    font-size: calc(7px + 2.5vw);
  }
`;
/* Home sec 2 */
export const InfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 45px;
  text-align: left;
  z-index: 1;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 10px;
    text-align: center;
    font-size: calc(11px + 2vw);
  }
`;
/* Home sec 3~6 , Services , Members Title */
export const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 40px;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 1.6vw;
    font-size: calc(15px + 2vw);
  }
`;
/* Home sec 5 - tool category subTitle */
export const ToolSubTitle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 30px;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    margin-block: 3vw 1vw;
    font-size: calc(5px + 3vw);
  }
`;
/* << X >> Home sec 5 - work tool name */
export const WorkToolName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(10px + 1vw);
  }
`;

/* Services , Members subTitle */
export const SerMemSubTitle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(10px + 1vw);
  }
`;

/* Home sec 3 - Link text */
const blinkAnimation = keyframes`
  0%{
  }
  100%{
    font-size: 25px;
  }
`;
export const LinkText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 23px;
  text-align: center;
  word-break: keep-all;
  cursor: pointer;
  animation: ${blinkAnimation} 1s linear infinite alternate;
  transition: 0.6s linear;
  &:hover {
    color: #ff6565;
  }
`;

/* Home - WorkCardSet 의 카드 속 text */
export const WorkTitleText = styled.div`
  position: absolute;

  line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;

  opacity: 1;

  transition: 0.5s linear;
  ${(props) =>
    props.isHovering &&
    css`
      opacity: 0;
      transform: translateY(10px);
    `}
`;
export const WorkInfoText = styled.div`
  position: absolute;

  line-height: 120%;
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;

  opacity: 0;

  bottom: 46px;

  transition: 0.5s linear;
  ${(props) =>
    props.isHovering &&
    css`
      opacity: 1;
      transform: translateY(-3px);
    `}
`;

/* Home - WorkEtcCardSet 의 카드 속 text */
const dnTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-50px, -17px); 

  }
`;
const nasTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    margin-left: 10px;
    transform: translate(-185px, 0px); 
  }
`;
const nasTitleMoveOut = keyframes`
  0%{
    text-align: left;
    margin-left: 10px;
    transform: translate(-185px, 0px); 
  }
  100%{
    text-align: left;
  }
`;
const gdsTitleMoveIn = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-205px, 0px); 
  }
`;
const gdsTitleMoveOut = keyframes`
  0%{
    text-align: left;
    transform: translate(-205px, 0px); 
  }
  100%{
    text-align: left;
  }
`;
export const DevnightTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 60px;
  margin-bottom: 10px;
  line-height: 150%;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  ${(props) =>
    props.isHovering &&
    css`
      animation: ${dnTitleMoveIn} 0.4s linear forwards;
    `}
`;
export const DevnightInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  bottom: 30px;
  width: 340px;
  line-height: 130%;
  color: white;
  font-size: 20px;
  text-align: justify;

  transition: 0.5s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(0px, -20px);
  `
      : `
      opacity: 0;
  `}
`;
export const NasTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 50px;
  line-height: 120%;
  color: #444444;
  font-size: 35px;
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${nasTitleMoveIn} 0.5s linear forwards;
        `
      : css`
          animation: ${nasTitleMoveOut} 0.3s linear backwards; ;
        `}
`;
export const NasInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 245px;
  width: 155px;
  line-height: 130%;
  font-size: 20px;
  text-align: right;
  text-align: justify;
  direction: rtl;

  transition: 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-20px, 0);
  `
      : `
      opacity: 0;
  `}
`;
export const GidaesaengTitleText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 10px 10px;
  line-height: 120%;
  color: #1d4a84;
  font-size: 35px;
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${gdsTitleMoveIn} 0.5s linear forwards;
        `
      : css`
          animation: ${gdsTitleMoveOut} 0.3s linear backwards; ;
        `}
`;
export const GidaesaengInfoText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 245px;
  width: 145px;
  line-height: 130%;
  font-size: 20px;
  text-align: justify;
  direction: rtl;

  transition: 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-20px, 0);
  `
      : `
      opacity: 0;
  `}
`;

/* <<Mobile>> Home - WorkEtcCardSet 의 카드 속 text */
export const WorkEtcSubtitleMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 1.3vw;
  line-height: 130%;
  font-size: calc(5px + 2vw);
  text-align: center;
`;
const dnTitleMoveInMobile = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-7vw, -1vw); 

  }
`;
const nasTitleMoveInMobile = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    margin-left: 1.6vw;
    transform: translate(-30.8vw, 0px); 
  }
`;
const nasTitleMoveOutMobile = keyframes`
  0%{
    text-align: left;
    margin-left: 1.6vw;
    transform: translate(-30.8vw, 0px); 
  }
  100%{
    text-align: left;
  }
`;
const gdsTitleMoveInMobile = keyframes`
  0%{
    text-align: left;

  }
  100%{
    text-align: left;
    transform: translate(-34.2vw, 0px); 
  }
`;
const gdsTitleMoveOutMobile = keyframes`
  0%{
    text-align: left;
    transform: translate(-34.2vw, 0px); 
  }
  100%{
    text-align: left;
  }
`;
export const DevnightTitleTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-top: calc(15px + 5vw);
  margin-bottom: 0vw;
  line-height: 130%;
  color: white;
  font-size: calc(7vw);
  font-weight: bold;
  text-align: center;

  ${(props) =>
    props.isHovering &&
    css`
      animation: ${dnTitleMoveInMobile} 0.4s linear forwards;
    `}
`;
export const DevnightInfoTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  bottom: 5vw;
  width: 56vw;
  line-height: 130%;
  color: white;
  font-size: calc(2px + 3vw);
  text-align: justify;

  transition: opacity 0.5s linear, transform 0.5s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(0px, -3.3vw);
  `
      : `
      opacity: 0;
  `}
`;
export const NasTitleTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 8.3vw;
  line-height: 115%;
  color: #444444;
  font-size: calc(6vw);
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${nasTitleMoveInMobile} 0.5s linear forwards;
        `
      : css`
          animation: ${nasTitleMoveOutMobile} 0.3s linear backwards; ;
        `}
`;
export const NasInfoTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 41vw;
  width: 27vw;
  line-height: 130%;
  font-size: calc(1px + 3vw);
  text-align: right;
  text-align: justify;
  direction: rtl;

  transition: opacity 0.4s linear, transform 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-3.3vw, 0);
  `
      : `
      opacity: 0;
  `}
`;
export const GidaesaengTitleTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 1.6vw 1.6vw;
  line-height: 115%;
  color: #1d4a84;
  font-size: calc(6vw);
  font-weight: bold;
  text-align: right;

  ${(props) =>
    props.isHovering
      ? css`
          animation: ${gdsTitleMoveInMobile} 0.5s linear forwards;
        `
      : css`
          animation: ${gdsTitleMoveOutMobile} 0.3s linear backwards; ;
        `}
`;
export const GidaesaengInfoTextMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  position: absolute;
  left: 41vw;
  width: 27vw;
  line-height: 130%;
  font-size: calc(1px + 3vw);
  text-align: justify;
  direction: rtl;

  transition: opacity 0.4s linear, transform 0.4s linear;
  ${(props) =>
    props.isHovering
      ? `
      opacity: 1;
      transform: translate(-3.3vw, 0);
  `
      : `
      opacity: 0;
  `}
`;

/* Home - Worktool 의 카드 이름 text */
export const WorktoolText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 12px 12px;
  line-height: 135%;
  color: black;
  font-size: 20px;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(1px + 3vw);
  }
`;

/* Home - Form 속 text */
export const FormText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 10px;
  line-height: 130%;
  font-size: 20px;
  word-break: break-all;
  word-wrap: break-word;
`;

/* --------------------------------------------------------------- */

/* Service info box ; text */
export const ServiceName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
export const ServiceInfo = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 20px;
  margin-bottom: 30px;
  max-width: 450px;
  line-height: 150%;
  font-size: 15px;
  text-align: center;
  word-break: keep-all;
`;
export const ServiceInfoMobile = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  line-height: 150%;
  font-size: calc(2px + 2vw);
  text-align: justify;
  //word-break: keep-all;
`;

/* Member info card ; text */
export const MemberName = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const MemberInfo = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  margin-block: 3px;
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: 11px;
  }
`;

/*
const Normal = styled.div`
  margin-bottom: ${(props) => props.mb || "20px"};
  font-size: ${(props) => props.size || "30px"};
  font-weight: ${(props) => props.sty || "normal"};
  text-align: ${(props) => props.pos || "center"};
`;
*/

/* Button */
export const AboutButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: calc(12px + 0.6vw);
  color: white;
`;
export const LinkButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(2px + 2vw);
  }
`;
export const CheckButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;

  ${(props) => (props.isChecked ? `` : `color: #707070`)}
`;
export const GoToCompButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
`;
export const PageBackButtonText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    font-size: calc(10px + 1vw);
  }
`;
