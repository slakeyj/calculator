import React from 'react';
import './Button.css'


// const gridCellStyle = {
//   flexGrow: '1',
//   height: '100px',
//   width: '50px',
//   margin: '5px'
// }

const Button = ({ onClick, children }) => {
  return <button className="button" onClick={onClick}>{children}</button>
}

export default Button;