import React from "react";
import styled from "styled-components";
import pageupIcon from "../../imgs/buttonImgs/pageup.svg";

const PageupIcon = styled.img`
  margin: 20px 0px;
  width: 35px;

  transition: 0.2s;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

function PageupButton() {
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <PageupIcon src={pageupIcon} onClick={pageUp}></PageupIcon>
    </div>
  );
}

export default PageupButton;
