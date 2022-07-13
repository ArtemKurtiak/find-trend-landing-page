import { ColorsEnum } from "../../enums/colors.enum";

export type StartupsTitleProps = {
    color: ColorsEnum;
    margin?: string;
    align?: string;
};

export enum PlanTypesEnum {
    MONTH = 'month',
    YEAR = 'year'
}

export interface ISubscriptionPlan {
    title: string;
    monthPrice: number;
    yearPrice: number;
    backgroundColor: ColorsEnum;
    buttonColor: ColorsEnum;
    preferences: string[];
    description: string;
    buttonTextColor: ColorsEnum;
}

export interface IPricingPeriodItemProps {
    margin?: string;
    isActive: boolean;
}