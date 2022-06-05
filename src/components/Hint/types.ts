import { ColorsEnum } from "../../enums/colors.enum";

export type HintPropsType = {
    color: ColorsEnum.WHITE | ColorsEnum.BLACK;
    arrowPosition: 'left' | 'right';
    label: string;
    forMobile?: boolean;
}

export type HintItemLabelPropsType = {
    color: ColorsEnum.WHITE | ColorsEnum.BLACK;
}