import React, { useContext } from 'react';
import styled from 'styled-components';
import TokenSearchContext from '../Context/TokenSearch';

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
import {ReactComponent as CheckedIcon } from '../icons/checked.svg';
import {ReactComponent as UnCheckedIcon } from '../icons/unchecked.svg';

const StyledChip = styled.div`
  > input {
    display: none;
  }

  > input + label {
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;    
    cursor: pointer;    
    display: grid;
    align-items: center;
    grid-gap: 5px;
    
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

   
    ${({ styles }) => {
      return  `
          font-size: ${styles?.fontSize || "8px"};  
          font-weight: ${styles?.fontWeight || "500"};  
          border-radius: ${styles?.borderRadius || "4px"};  
          background-color: ${styles?.backgroundColor || "#474F5C"};  
          border: ${styles?.border || "solid 2px #474F5C"};   
          padding: ${styles?.padding || "7px 5px"};   
          margin: ${styles?.margin || "5px 5px 0"};   
          color: ${styles?.defaultColor || "#B4BBC7"};   
          width: ${styles?.width || "122px"};   
          height: ${styles?.height || "auto"};   
          text-align: ${styles?.textAlign || "center"}; 
          text-transform: ${styles?.textTransform || "uppercase"}; 
          grid-template-columns: ${styles?.gridTemplateColumn || "20px 20px 70px"}; 
          >:last-child {      
            justify-self: ${styles?.justifySelf || "end"}; 
          }
        ` 
      }
    }      
  }

  > input:checked + label {
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;   
    ${({ styles }) => `
        border-color: ${styles?.checkedColor || "#B4BBC7"};    
        color: ${styles?.checkedColor || "black"};   
        background-color: ${styles?.checkedBackgroundColor || "#B4BBC7"};  
      `
    }     
  }
`;

const ChipIcon = ({label}) => {
  console.log('label: ', label)
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
export const Chip = (props) => {
  const renderProps = useContext(TokenSearchContext);
  
  const { label, checked, onChange, name, value, styles } = props
  
  const { customChip } = renderProps
  const customStyles = styles === undefined ? customChip?.styles : styles
  
  const checkedStatus = checked ? <CheckedIcon /> : <UnCheckedIcon />
  return (
    <StyledChip styles={customStyles} 
    >      
      <input type="checkbox" id={`${label}-${name}`} onChange={onChange} checked={checked} name={name} value={value} />
      <label htmlFor={`${label}-${name}`}>
        <ChipIcon label={label} />
        <span>{label}</span>
        {label !== 'Select All' && checkedStatus}
      </label>
    </StyledChip>
  );
}
export default Chip;