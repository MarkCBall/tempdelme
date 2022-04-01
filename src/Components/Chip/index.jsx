import React, { memo } from 'react';
import './style.css'

export const Chip = memo(
  (props) => {
    const {label, checked, onChange} = props
    return (
      <>
        <input type="checkbox" id={label} onChange={onChange} checked={checked}/>
        <label for={label}>{label} </label>
      </>
    )
  }
)

export default Chip