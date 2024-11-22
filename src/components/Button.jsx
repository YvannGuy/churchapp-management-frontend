import React from 'react';

const Button = ({ label, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;
