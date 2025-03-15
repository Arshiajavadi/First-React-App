import React from "react";
interface Props {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-success alert-dismissible fade show">
      {children}
      <button className="btn btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
