import {ReactComponent as DefaultIcon } from '../icons/default.svg';
import {ReactComponent as BscIcon } from '../icons/bsc.svg';

import {ReactComponent as KyberIcon } from '../icons/kyber.svg';
import {ReactComponent as PangolinIcon } from '../icons/pangolin.svg';
import {ReactComponent as SushiIcon } from '../icons/sushi.svg';
import {ReactComponent as TraderIcon } from '../icons/trader.svg';
import AvalancheIcon from '../icons/avalanche';
import MoonBeamIcon from '../icons/moonbeam';
import MoonRiverIcon from '../icons/moonriver';
import ApeSwapIcon from '../icons/apeswap';
import BabySwapIcon from '../icons/babyswap';
import BiSwapIcon from '../icons/biswap';
import EllipsisFinanceIcon from '../icons/ellipsis.finance';
import SafeSwapIcon from '../icons/safeswap';
import BaquetteIcon from '../icons/baguette';
import PancakeIcon from '../icons/pancake';
import CanaryIcon from '../icons/canary';
import ComplusNetworkIcon from '../icons/complus.network';
import ElkFinanceIcon from '../icons/elk.finance';
import LydiaFinanceIcon from '../icons/lydia.finance';
import OliveSwapIcon from '../icons/oliveswap';
import PandaSwapIcon from '../icons/pandaswap';
import YetiSwapIcon from '../icons/yetiswap';
import ZeroExchangeIcon from '../icons/zero.exchange';
import BeamSwapIcon from '../icons/beamswap';
import SolarBeamIcon from '../icons/solarbeam';
import StellaSwapIcon from '../icons/stellaswap';

export const Logo = ({label, filter}) => {  
  let result;
  switch(label) {
    // networks
    case 'bsc':
      result = <BscIcon />
      break;
    case 'avalanche':
      result = <AvalancheIcon />
      break;
    
    case 'kyberdmm':
      result = <KyberIcon />
      break
    case 'pangolin':
      result = <PangolinIcon />
        break
    case 'sushiswap':
      result = <SushiIcon />
        break
    case 'traderjoe':
      result = <TraderIcon />
        break
    case 'mdex':
      result = <TraderIcon />
        break
    case 'Select All':
      result = <></>
      break;
    case 'moonbeam':
      result = <MoonBeamIcon />
      break;
    case 'moonriver':   
      result = <MoonRiverIcon />
      break; 
    case 'apeswap':
      result = <ApeSwapIcon />
      break;
    case 'babyswap':
      result = <BabySwapIcon />
      break;
    case 'biswap':
      result = <BiSwapIcon />
      break;
    case 'ellipsis.finance':
      result = <EllipsisFinanceIcon />
      break;
    case 'pancakeswap':
      result = <PancakeIcon />
      break;
    case 'safeswap':
      result = <SafeSwapIcon />
      break;
    case 'baguette':
      result = <BaquetteIcon />
      break;
    case 'canary':
      result = <CanaryIcon />;
      break;
    case 'complusnetwork':
      result = <ComplusNetworkIcon />;
      break;
    case 'elkfinance':
      result = <ElkFinanceIcon />;
      break;
    case 'lydiafinance':
      result = <LydiaFinanceIcon />;
      break;
    case 'oliveswap':
      result = <OliveSwapIcon />;
      break;
    case 'pandaswap':
      result = <PandaSwapIcon />;
      break;
    case 'yetiswap':
      result = <YetiSwapIcon />;
      break;
    case 'zeroexchange':  
      result = <ZeroExchangeIcon />;
      break;     
    case 'beamswap':
      result = <BeamSwapIcon />;
      break;
    case 'solarflare':
      result = <SolarBeamIcon />;
      break;
    case 'stellaswap':
      result = <StellaSwapIcon />;
      break;
    case 'solarbeam':
      result = <SolarBeamIcon />;
      break;
    default:
      result = <DefaultIcon />
  }
  
  return <div style={{filter: `grayscale(${filter})`}}>
    {result}
  </div>
}

export default Logo;