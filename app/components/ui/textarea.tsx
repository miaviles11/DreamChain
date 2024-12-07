import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${className}`}
      {...props}
    />
  );
}
