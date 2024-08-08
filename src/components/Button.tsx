import { cn } from "@/lib/utils";
import React from "react";

const Button = ({ text, className }: { text: String; className?: string }) => {
  return (
    <div
      className={cn(
        "border-2 border-myWhite px-4 py-3 mt-4 rounded-full w-full grid place-items-center mx-auto cursor-pointer lg:mx-0 transition-all",
        className
      )}
    >
      {text}
    </div>
  );
};

export default Button;
