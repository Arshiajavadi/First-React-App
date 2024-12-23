import React, { useState } from "react";
interface Props {
    children: string;
    onClick: () => void;
    onClose: () => void;
}

const Button = ({ children, onClick, onClose}: Props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onClick}>
        {children}
          </button>
          <button className="btn btn-danger" onClick={onClose}>Close</button>
    </>
  );
};

export default Button;
