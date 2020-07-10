import React from "react";

import "./form-textarea.styles.scss";

const FormTextArea = ({ handleChange, label, ...otherProps }) => (
   <div className="group">
      <textarea className="form-textarea" onChange={handleChange} {...otherProps} />
      {label ? (
         <label className={`${otherProps.value.length ? "shrink" : ""} form-textarea-label`}>
            {label}
         </label>
      ) : null}
   </div>
);

export default FormTextArea;
