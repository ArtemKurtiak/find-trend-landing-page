import React from 'react';

import { StyledButton } from './styled';
import { ButtonPropTypes } from "./types";

const Button: React.FC<ButtonPropTypes> = ({ label, ...props }) => {
    return <StyledButton
        {...props}
    >
        {label}
    </StyledButton>
}

export default Button;