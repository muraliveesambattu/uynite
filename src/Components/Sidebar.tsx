import React from "react";

type SidebarProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode; 
};

const Sidebar: React.FC<SidebarProps> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-gray-100 w-1/4 rounded shadow-md">
      <h1 className="text-xl font-semibold mb-2 p-2 text-center" style={{color:'#05B7FD'}}>{title}</h1>
      <h2 className="text-sm text-gray-500 mb-4">{subtitle}</h2>
      <div>{children}</div> 
    </div>
  );
};

export default Sidebar;
