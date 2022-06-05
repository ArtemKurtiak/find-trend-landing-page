import React from "react";

import { HintItem, HintItemLabel } from "./styled";
import { HintPropsType } from "./types";

import WhiteHintArrow from '../../assets/images/svg/white_hint_arrow.svg';

const Hint: React.FC<HintPropsType> = ({ label, color, arrowPosition, forMobile = true }) => {
    return <HintItem>
        { arrowPosition === 'left' && <img
            src={WhiteHintArrow}
            alt={'arrow'}
            width={35}
            height={41}
        /> }
        <HintItemLabel
            color={color}
        >
            {label}
        </HintItemLabel>
        { arrowPosition === 'right' && <img
            src={WhiteHintArrow}
            alt={'arrow'}
            width={35}
            height={41}
        /> }
    </HintItem>
}

export default Hint;