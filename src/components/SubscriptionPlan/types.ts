import { ColorsEnum } from "../../enums/colors.enum";
import { PlanTypesEnum } from "../../pages/Home/types";

export interface ISubscriptionPlanWrapper {
    title: string;
    backgroundColor: ColorsEnum;
    monthPrice: number;
    yearPrice: number;
    preferences: string[];
    buttonColor: ColorsEnum;
    buttonTextColor: ColorsEnum;
    description: string;
    selectedPeriod: PlanTypesEnum;
}

export interface ISubscriptionPlanWrapperProps {
    backgroundColor: ColorsEnum;
}