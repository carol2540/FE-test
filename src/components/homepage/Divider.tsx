import React from "react";
import Div from "../Div";
import Image from "next/image";

import divider from "../../../public/images/Divider.svg";
import dividerwhite from "../../../public/images/Divider-white.svg";
import Wrapper from "../Wrapper";
import { cn } from "@/lib/utils";

interface DividerColor {
  color?: "white" | "colorful";
  className?: string;
}

const Divider = ({ color = "colorful", className }: DividerColor) => {
  return (
    <Div full>
      <Wrapper
        className={cn(
          "w-full grid place-items-center mb-10 lg:mb-16",
          className
        )}
      >
        <Image
          src={color == "colorful" ? divider : dividerwhite}
          width={800}
          alt="divider"
          className="w-[90%] lg:w-[70%]"
        />
      </Wrapper>
    </Div>
  );
};

export default Divider;
