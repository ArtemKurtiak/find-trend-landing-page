import React from "react";

import { TabItemLabel, TabItemWrapper, CloseTabItemWrapper, CloseTabTick } from "./styled";
import { TabItemPropsType } from "./types";

import CloseTab from '../../assets/images/svg/close_tab_tick.svg';

const TabItem: React.FC<TabItemPropsType> = ({ label, icon }) => {
    return <TabItemWrapper>
        <img
            src={icon}
            alt={'icon'}
            width={32}
            height={32}
        />
        <TabItemLabel>
            {label}
        </TabItemLabel>
        <CloseTabItemWrapper>
            <CloseTabTick
                src={CloseTab}
                alt={'tick'}
            />
        </CloseTabItemWrapper>
    </TabItemWrapper>
}

export default TabItem;