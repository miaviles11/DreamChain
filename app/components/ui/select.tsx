"use client";

import React, { createContext, useContext, useState } from "react";

// Contexto para manejar el estado del Select
const SelectContext = createContext<any>(null);

interface SelectProps {
  children: React.ReactNode;
}

export function Select({ children }: SelectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
    selected,
    setSelected,
    isOpen,
    setIsOpen,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button
      type="button"
      className={`w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  const { selected } = useContext(SelectContext);
  return <span>{selected || placeholder}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(SelectContext);
  return isOpen ? (
    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">{children}</ul>
  ) : null;
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  const { setSelected, setIsOpen } = useContext(SelectContext);
  return (
    <li
      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => {
        setSelected(value);
        setIsOpen(false);
      }}
    >
      {children}
    </li>
  );
}
