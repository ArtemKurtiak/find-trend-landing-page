import React from "react";

import {HintItem, HintItemLabel} from "./styled";
import {HintPropsType} from "./types";
import {ColorsEnum} from "../../enums/colors.enum";

import LeftWhiteHintArrow from '../../assets/images/svg/right_white_hint_arrow.svg';
import RightBlackHintArrow from '../../assets/images/svg/right_black_hint_arrow.svg';
import LeftBlackHintArrow from '../../assets/images/svg/left_black_hint_arrow.svg';

const Hint: React.FC<HintPropsType> = ({ label, color, arrowPosition, forMobile = true }) => {
    return <HintItem
        alignItems={arrowPosition === 'left' ? 'flex-end' : 'flex-start'}
    >
        { arrowPosition === 'left' && <img
            src={LeftBlackHintArrow}
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
            src={color === ColorsEnum.BLACK ? RightBlackHintArrow : LeftWhiteHintArrow}
            alt={'arrow'}
            width={35}
            height={41}
        /> }
    </HintItem>
}

export default Hint;