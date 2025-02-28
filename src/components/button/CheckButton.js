import React, { useState } from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import checkedIcon from "../../imgs/buttonImgs/checked.svg";
import uncheckedIcon from "../../imgs/buttonImgs/unchecked.svg";

const CheckButtonWrap = styled.div`
  width: 120px;
  height: 50px;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

function CheckButton({ category, isChecked, setIsChecked }) {
  return (
    <CheckButtonWrap>
      <Icon
        src={isChecked ? checkedIcon : uncheckedIcon}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <T.CheckButtonText isChecked={isChecked}>{category}</T.CheckButtonText>
    </CheckButtonWrap>
  );
}

export default CheckButton;
