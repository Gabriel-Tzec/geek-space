import React, { FC } from "react";

interface GridProps {
  children: React.ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4 px-4 h-full">{children}</div>;
};

export default Grid;
