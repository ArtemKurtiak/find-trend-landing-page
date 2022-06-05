import styled from "@emotion/styled";
import {HintItemLabelPropsType, HintPropsType} from "./types";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import {MediaQueriesEnum} from "../../enums/mediaQueries.enum";

export const HintItem = styled.div<Pick<HintPropsType, 'forMobile'>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props => !props.forMobile && `
    ${MediaQueriesEnum.MAX_MOBILE} {
        display: none;
    }
  `}
`

export const HintItemLabel = styled.div<HintItemLabelPropsType>`
  color: ${props => props.color};
  font-family: ${FontFamiliesEnum.GOOD_DOG_NEW};
  font-size: 14px;
  max-width: 95px;
  text-align: center;
  transform: rotate(6deg);
`