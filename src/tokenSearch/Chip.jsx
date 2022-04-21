import React, { useContext } from 'react';
import styled from 'styled-components';
import TokenSearchContext from '../Context/TokenSearch';

import { Logo } from '../tokenSearch/Logo'
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
        <Logo label={label} />
        <span>{label}</span>
        {label !== 'Select All' && checkedStatus}
      </label>
    </StyledChip>
  );
}
export default Chip;