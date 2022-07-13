import React from 'react';

import { ToggleIndicator, ToggleWrapper } from './styled';
import { IToggleProps } from "./types";

const Toggle: React.FC<IToggleProps> = ({
    isActive,
    inactiveBackgroundColor,
    inactiveIndicatorColor,
    activeIndicatorColor,
    activeBackgroundColor,
    onChange
}) => {
    return <ToggleWrapper
        onClick={onChange}
        activeColor={activeBackgroundColor}
        inactiveColor={inactiveBackgroundColor}
        isActive={isActive}
    >
        <ToggleIndicator
            isActive={isActive}
            activeColor={activeIndicatorColor}
            inactiveColor={inactiveIndicatorColor}
        />
    </ToggleWrapper>
};

export default Toggle;