import { ColorsEnum } from '../../enums/colors.enum';
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";

export type ButtonPropTypes = {
    bgColor: ColorsEnum;
    color: ColorsEnum;
    label: string;
    fontFamily?: FontFamiliesEnum;
    margin?: string;
    width?: string;
    padding?: string;
}
