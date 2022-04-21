
import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import {ReactComponent as DefaultIcon } from '../icons/default.svg';
import { Logo } from '../tokenSearch/Logo'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { firstAndLast, capitalizeFirstLetter } from './helpers/firstAndLast';
import { intToWords } from './helpers/intToWords';
import TokenSearchContext from '../Context/TokenSearch';

import {ReactComponent as DownIcon } from '../icons/down.svg';
import {ReactComponent as UpIcon } from '../icons/up.svg';
const imageSize = 26;

const StyledDetailList = styled.div`  
  ${({styles}) => `
    display: ${ styles?.container?.display || "grid" };
    grid-gap: 5px;
    align-items: ${ styles?.container?.alignItems || "center" };    
    padding: ${ styles?.container?.padding || "5px 8px" };    
    background: ${ styles?.container?.background || "#00070E" };
    border-bottom: ${ styles?.container?.borderbottom || "1px solid #474F5C" };    
    grid-template-columns: ${styles?.container?.gridTemplateColumn || "20% 20% 5% 5% 36% 10%"}; 

    & .token {
      display: inherit;
      align-items: center;
      grid-template-columns: 20px 100px; 
      color: ${ styles?.token?.background || "#B4BBC7" };
      font-size: ${ styles?.token?.fontSize || "12px" };
      font-weight: ${ styles?.token?.fontWeight || "600" };      
      padding: 0 5px;
      
      > span {
        padding-left: 5px;
      }
    }

    & .logo {
      padding: 0 10px;
    }

    & .pair {
      color: ${ styles?.pair?.color || "#B4BBC7" };
      font-size: ${ styles?.pair?.fontSize || "8px" };

      & .count {
        display: flex;
      }
    }

    & .detail {
      padding: ${ styles?.detail?.padding || "3px" };
    }
    
    > button {
      border-color: ${ styles?.button?.borderColor || "#474F5C" };      
      background-color: ${ styles?.button?.backgroundColor || "#474F5C" };      
      color: ${ styles?.button?.color || "#7A808A" };      
      border-radius: ${ styles?.button?.borderRadius || "4px" };      
      font-size: ${ styles?.button?.fontSize || "10px" };
      border-width: 0;      
      cursor: pointer;
      padding: ${ styles?.button?.padding || "6px" };

      &:hover {
        background-color: ${ styles?.button?.hoverBackColor || "#232C38" };      
      }    
    }
  `}    
`;

const StyledDetailContent = styled.div`
  ${({styles}) => `
    display: ${ styles?.content?.display || "block" };    
    align-items: ${ styles?.content?.alignItems || "center" };    
    padding: ${ styles?.content?.padding || "5px 13px" };    
    margin: ${ styles?.content?.margin || "5px 0" };    
    background: ${ styles?.content?.background || "#474F5C" };
    border-bottom: ${ styles?.content?.borderbottom || "1px solid #474F5C" };    
    border-radius: ${ styles?.content?.borderRadius || "4px" };      

    & .tokens {
      display: grid;
      grid-template-columns: ${styles?.content?.gridTemplateColumn || "54% 40% 6%"}; 

      & .item {
        display: inherit;
        gap: 5px;
        grid-template-columns: 20px;

        & .name {
          align-self: center;
          font-size: ${ styles?.content?.token?.fontSize || "12px" };
          font-weight: ${ styles?.content?.token?.fontWeight || "600" };
        }
    
        & .address {
          align-self: center;
          display: flex;
          grid-row: 2;
          grid-column: 2;
          font-size: ${ styles?.content?.address?.fontSize || "10px" };
        }
      } 
      & .up {
        justify-self: flex-end;
        cursor: pointer;
      }
    } 
  `}
`

const StyledAction = styled.div`
  cursor: pointer;
  padding: 10;
`
const Action = (props) => {
  const { component, detail } = props
  const Component = component
  return (
    <StyledAction>
      <Component detail={detail}/>
    </StyledAction>
  )
    
}
export const ResultDetail = (props) => {
  const { index, suggestions } = props;
  const renderProps = useContext(TokenSearchContext);  
  const { customTokenDetail, customActions } = renderProps;

  const selectedPair = suggestions[index];
  
  const tokenImage = (token) => {
    if (token?.image) 
    return (
      <img
      alt={token?.symbol}
      src={token?.image}
      style={{ borderRadius: '50%' }}
      width={imageSize}
    />)
    else
      return <DefaultIcon />
  } 
  const [showDetail, setShowDetail] = useState(false)

  const handleDetail = () => {
    setShowDetail(!showDetail)
  }

  return (
    <>
      <StyledDetailList>              
      <div className='token'>
        {tokenImage(selectedPair.token0)} <span>{selectedPair.token0.name}</span>
      </div>      
      <div className='token'>
        {tokenImage(selectedPair.token1)} <span>{selectedPair.token1.name}</span>
      </div>     
      <div className='logo'>
        <Logo label={selectedPair.network} />
      </div>
      <div className='logo'>
        <Logo label={selectedPair.exchange} />
      </div>
      <div className='pair'>
        <div className='detail'>
          Pair: <strong>{firstAndLast(selectedPair.id)}</strong>
        </div>
        <div className='count'>
          <div className='detail'>
            Volume: <strong>{intToWords(selectedPair.volumeUSD)}</strong>
          </div>
          <div className='detail'>
            Holder: <strong>{intToWords(selectedPair.volumeUSD)}</strong>
          </div>
        </div>
      </div>
      <button onClick={handleDetail}>Details <DownIcon /></button>
      </StyledDetailList>

      <StyledDetailContent>
        <div className='tokens'>
          <div className='item'>
            {tokenImage(selectedPair.token0)} 
            <span class='name'>{selectedPair.token0.name}</span>
            <span class='address'>Address: <strong>{firstAndLast(selectedPair.token0.address)}</strong></span>
          </div>
          <div className='item'>
            {tokenImage(selectedPair.token1)} 
            <span class='name'>{selectedPair.token1.name}</span>
            <span class='address'>Address: <strong>{firstAndLast(selectedPair.token1.address)}</strong></span>
          </div>
          <div className='up'>
            <UpIcon onClick={handleDetail} />
          </div>
        </div>
        <div className='pair'>
          
        </div>
      </StyledDetailContent>
    </>
  );
}
export default ResultDetail