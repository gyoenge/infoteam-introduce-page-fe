import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 150px;
  background-color: #f5f5f5;
  text-align: center;
`;

function Footer() {
  return (
    <div>
      <div style={{ paddingBottom: "170px" }} />
      <FooterWrap />
    </div>
  );
}

export default Footer;
