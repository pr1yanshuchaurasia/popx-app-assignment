import React from 'react';

export default function FloatingInput({ label, required, ...props }) {
  return (
    <div className="form-floating-custom">
      <label>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <input className="form-control" {...props} />
    </div>
  );
}