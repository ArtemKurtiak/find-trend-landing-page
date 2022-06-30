import { useState } from "react";

import PlatformItem from "./components/PlatformItem";

import { PlatformsListWrapper } from "./styled";

import Facebook from '../../assets/images/icons/facebook.svg';
import Twitter from '../../assets/images/icons/twitter.svg';
import Dribble from '../../assets/images/icons/dribble.svg';
import Pinterest from '../../assets/images/icons/pinterest.svg';
import Reddit from '../../assets/images/icons/reddit.svg';
import LinkedIn from '../../assets/images/icons/linkedin.svg';

const platformsArray: string[] = [
    Facebook,
    Twitter,
    Dribble,
    Pinterest,
    Reddit,
    LinkedIn
]

const PlatformsList = () => {
    const [activePlatform, setActivePlatform] = useState(platformsArray[1]);

    return <PlatformsListWrapper>
        {platformsArray.map((platformItem) => {
            return <PlatformItem
                key={platformItem}
                image={platformItem}
                activePlatform={activePlatform}
                setActivePlatform={setActivePlatform}
            />
        })}
    </PlatformsListWrapper>
};

export default PlatformsList;