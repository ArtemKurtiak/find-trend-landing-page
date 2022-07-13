import { ColorsEnum } from "../../enums/colors.enum";

export interface IToggleWrapperProps {
    isActive: boolean;
    activeColor: ColorsEnum;
    inactiveColor: ColorsEnum;
}

export interface IToggleIndicatorProps {
    isActive: boolean;
    activeColor: ColorsEnum;
    inactiveColor: ColorsEnum;
}

export interface IToggleProps {
    activeBackgroundColor: ColorsEnum;
    inactiveBackgroundColor: ColorsEnum;
    activeIndicatorColor: ColorsEnum;
    inactiveIndicatorColor: ColorsEnum;
    isActive: boolean;
    onChange: () => void;
}