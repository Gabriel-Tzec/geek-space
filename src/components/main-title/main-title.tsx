import React, { FC } from "react";

interface MainTitleProps {
  children: React.ReactNode;
}

const MainTitle: FC<MainTitleProps> = ({ children }) => {
  return <h1 className="text-3xl font-bold mb-4 text-orange-500 text-center">{children}</h1>;
};

export default MainTitle;
