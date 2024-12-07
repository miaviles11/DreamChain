import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={`block text-gray-700 font-medium mb-2 ${className}`}
      {...props}
    >
      {props.children}
    </label>
  );
}
