import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <div className="flex justify-center items-center py-4 px-6" style={{height: "100vh"}}>{children}</div>;
};

export default Layout;
