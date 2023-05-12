import React from "react";

type Props = {
  children: React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <p className="text-3l basis-3/5 font-montserrat font-bold">{children}</p>
  );
};

export default Htext;
