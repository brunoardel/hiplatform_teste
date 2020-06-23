import React from "react";
import "./styles.css";

const Checkbox = props => {
  const { label, ...rest } = props;
  return (
    <>
      <input type="checkbox" className="custom-checkbox" {...rest} />
      <label htmlFor="node" >{label}</label>
    </>
  );
};

export default Checkbox;
