import React from "react";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-64 bg-black text-white h-screen flex flex-col">
      {children}
    </aside>
  );
};

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="p-4 text-lg font-bold">{children}</header>;
};

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return <nav className="flex-1 p-4">{children}</nav>;
};

export const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-2">{children}</ul>;
};

export const SidebarMenuItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

export const SidebarMenuButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full flex items-center px-4 py-2 rounded-md text-left hover:bg-gray-700">
      {children}
    </button>
  );
};
