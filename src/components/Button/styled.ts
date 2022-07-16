import styled from "@emotion/styled";

import { ButtonPropTypes } from "./types";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";

export const StyledButton = styled.div<Omit<ButtonPropTypes, 'label'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin};
  font-family: ${props => props.fontFamily || FontFamiliesEnum.EFFRA_REGULAR};
  font-size: clamp(0.6em, 0.9em, 1.3em);
  border-radius: 40px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  cursor: pointer;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding || '12px 32px'};
`
