import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Button.module.css";
interface Props {
  children: string;
  onClick: () => void;
  onClose: () => void;
}

const Button = ({ children, onClick, onClose }: Props) => {
  return (
    <>
      <button
        className={[styles.button, styles.showButton].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
      <button
        className={[styles.button, styles.closeButton].join(" ")}
        onClick={onClose}
      >
        Close
      </button>
    </>
  );
};

export default Button;
