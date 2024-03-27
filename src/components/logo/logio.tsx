import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-center">
      <Image
        src={"/logo.png"}
        alt="Logo de Rick & Morty"
        height={300}
        width={300}
        priority
      />
    </div>
  );
};

export default Logo;
