import React from "react";
import Div from "../Div";
import Image from "next/image";

import separator from "../../../public/images/Separator.svg";
import separatorwhite from "../../../public/images/Separator-white.svg";
import Wrapper from "../Wrapper";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  color?: "white" | "colorful";
  className?: string;
}

const Separator = ({ color = "colorful", className }: SeparatorProps) => {
  return (
    <Div full>
      <Wrapper
        className={cn(
          "w-full grid place-items-center mb-10 lg:mb-16",
          className
        )}
      >
        <Image
          src={color == "colorful" ? separator : separatorwhite}
          width={800}
          alt="separator"
          className="w-[90%] lg:w-[70%]"
        />
      </Wrapper>
    </Div>
  );
};

export default Separator;
