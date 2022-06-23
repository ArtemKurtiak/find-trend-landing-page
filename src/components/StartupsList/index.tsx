import { Flex } from "../Common/styled";

import Microsoft from '../../assets/images/logos/microsoft.svg';
import Allianz from '../../assets/images/logos/allianz.svg';
import Upwork from '../../assets/images/logos/upwork.svg';
import Volvo from '../../assets/images/logos/volvo.svg';
import Crab from '../../assets/images/logos/crab.svg';
import Verizon from '../../assets/images/logos/verizon.svg';
import Coinbase from '../../assets/images/logos/coinbase.svg';
import Expedia from '../../assets/images/logos/expedia.svg';
import Airtable from '../../assets/images/logos/airtable.svg';
import Magento from '../../assets/images/logos/magento.svg';
import Carrera from '../../assets/images/logos/carrera.svg';
import Bonanza from '../../assets/images/logos/bonanza.svg';
import WeTransfer from '../../assets/images/logos/wetransfer.svg';
import Suzuki from '../../assets/images/logos/suzuki.svg';
import Algolia from '../../assets/images/logos/algolia.svg';
import Heineken from '../../assets/images/logos/heineken.svg';
import StartupItem from "./components/StartupItem";

const startUpsArray: string[] = [
    Microsoft,
    Allianz,
    Upwork,
    Volvo,
    Crab,
    Verizon,
    Coinbase,
    Expedia,
    Airtable,
    Magento,
    Carrera,
    Bonanza,
    WeTransfer,
    Suzuki,
    Algolia,
    Heineken
]

const StartupsList = () => {
    return <Flex
        justifyContent={'space-around'}
        gap={'32px'}
        wrap={'wrap'}
        margin={'0px 145px'}
        mobileMargin={false}
    >
        {startUpsArray.map((item) => {
            return <StartupItem key={item} image={item} />
        })}
    </Flex>
}

export default StartupsList;