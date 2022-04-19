import React, { useContext } from 'react';
import styled from 'styled-components';
import TokenSearchContext from '../Context/TokenSearch';

const StyledChip = styled.div`
  > input {
    display: none;
  }

  > input + label {
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;    
    cursor: pointer;    
    display: inline-block;
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
          padding: ${styles?.padding || "7px 35px"};   
          margin: ${styles?.margin || "5px 5px 0"};   
          color: ${styles?.defaultColor || "#B4BBC7"};   
          width: ${styles?.width || "50px"};   
          height: ${styles?.height || "auto"};   
          text-align: ${styles?.textAlign || "center"}; 
          text-transform: ${styles?.textTransform || "uppercase"}; 
        ` 
      }
    }      
  }

  > input:checked + label {
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;   
    ${({ styles }) => `
        border-color: ${styles?.checkedColor || "#666699"};    
        color: ${styles?.checkedColor || "black"};   
        background-color: ${styles?.checkedBackgroundColor || "gray"};  
      `
    }     
  }
`;

export const Chip = (props) => {
  const renderProps = useContext(TokenSearchContext);
  
  const { label, checked, onChange, name, value, styles } = props
  
  const { customChip } = renderProps
  const customStyles = styles === undefined ? customChip?.styles : styles
  
  return (
    <StyledChip styles={customStyles} 
    >
      <input type="checkbox" id={`${label}-${name}`} onChange={onChange} checked={checked} name={name} value={value} />
      <label htmlFor={`${label}-${name}`}>{label} </label>
    </StyledChip>
  );
}
export default Chip;