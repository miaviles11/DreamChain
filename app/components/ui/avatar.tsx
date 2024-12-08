"use client";

import React from "react";

interface AvatarProps {
  src?: string; // URL de la imagen del avatar
  alt?: string; // Texto alternativo para la imagen
  fallback?: string; // Texto que se muestra si no hay imagen
  className?: string; // Clases adicionales para personalización
}

export function Avatar({ className = "", ...props }: { className?: string; children: React.ReactNode }) {
  return <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 ${className}`} {...props}></div>;
}

export function AvatarImage({ src, alt = "Avatar", className = "" }: { src: string; alt?: string; className?: string }) {
  return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />;
}

export function AvatarFallback({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`text-gray-700 font-semibold flex items-center justify-center ${className}`}>{children}</span>;
}
