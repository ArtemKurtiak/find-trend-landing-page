import React from "react";

import { StartupItemProps } from "./types";
import { StartupItemImage, StartupItemWrapper } from "./styled";

const StartupItem: React.FC<StartupItemProps> = ({ image }) => {
    return <StartupItemWrapper>
        <StartupItemImage src={image} alt={'startup'} />
    </StartupItemWrapper>
}

export default StartupItem;