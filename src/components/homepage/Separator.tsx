import React from "react";
import Div from "../Div";
import Image from "next/image";

import separator from "../../../public/images/Separator.svg";
import Wrapper from "../Wrapper";

const Separator = () => {
  return (
    <Div full>
      <Wrapper className="w-full grid place-items-center mb-10 lg:mb-16">
        <Image
          src={separator}
          width={800}
          alt="separator"
          className="w-[90%] lg:w-[70%]"
        />
      </Wrapper>
    </Div>
  );
};

export default Separator;
