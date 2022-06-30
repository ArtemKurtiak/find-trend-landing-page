import React from 'react';

import { PlatformItemIcon, PlatformItemWrapper } from "./styled";
import { IPlatformItemProps } from "./types";

const PlatformItem: React.FC<IPlatformItemProps> = ({ image, activePlatform, setActivePlatform }) => {
    const handlePlatformClick = () => {
        setActivePlatform(image);
    }

    return <PlatformItemWrapper
        active={image === activePlatform}
        onClick={handlePlatformClick}
    >
        <PlatformItemIcon src={image} alt={'icon'} />
    </PlatformItemWrapper>
};

export default PlatformItem;