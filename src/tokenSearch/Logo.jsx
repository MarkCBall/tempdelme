import {ReactComponent as DefaultIcon } from '../icons/default.svg';
import {ReactComponent as BscIcon } from '../icons/bsc.svg';
import {ReactComponent as AvalancheIcon } from '../icons/avalanche.svg';
import {ReactComponent as EthereumIcon } from '../icons/ethereum.svg';
import {ReactComponent as KyberIcon } from '../icons/kyber.svg';
import {ReactComponent as MdexIcon } from '../icons/mdex.svg';
import {ReactComponent as PancakeIcon } from '../icons/pancake.svg';
import {ReactComponent as PangolinIcon } from '../icons/pangolin.svg';
import {ReactComponent as SushiIcon } from '../icons/sushi.svg';
import {ReactComponent as TraderIcon } from '../icons/trader.svg';

export const Logo = ({label}) => {  
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
    case 'moonriver':    
    case 'baguette':
    case 'canary':
    case 'complusnetwork':
    case 'elkfinance':
    case 'lydiafinance':
    case 'oliveswap':
    case 'pandaswap':
    case 'yetiswap':
    case 'zeroexchange':
    case 'apeswap':
    case 'babyswap':
    case 'biswap':
    case 'ellipsis.finance':
    case 'safeswap':
    case 'beamswap':
    case 'solarflare':
    case 'stellaswap':
    case 'solarbeam':
    default:
      result = <DefaultIcon />
  }
  
  return result
}

export default Logo;