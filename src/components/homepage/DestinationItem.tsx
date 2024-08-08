import React from "react";
import Div from "../Div";
import Image from "next/image";

import dummy from "../../../public/images/header-image.svg";
import { AspectRatio } from "../ui/aspect-ratio";
import Button from "../Button";
import { cn } from "@/lib/utils";

interface DestinationItemProps {
  direction?: "ltr" | "rtl";
}

const DestinationItem = ({ direction = "ltr" }: DestinationItemProps) => {
  return (
    <Div full column className="gap-3 md:flex-row md:items-center lg:gap-8">
      <Div
        full
        className={cn(
          "basis-1/2",
          direction == "ltr" ? "md:order-1" : "md:order-2"
        )}
      >
        <Image
          src={dummy}
          width={400}
          alt="img"
          className="object-cover object-center w-full h-full aspect-video rounded-sm md:h-64 lg:h-96"
        />
      </Div>

      <Div
        className={cn(
          "basis-1/2",
          direction == "ltr" ? "md:order-2" : "md:order-1"
        )}
      >
        <Div column full className="text-myGreen">
          <p className="text-sm uppercase lg:text-base">7 DAYS 6 NIGHTS</p>
          <p className="font-bold font-unbounded line-clamp-2 lg:text-36">
            Paradise Gateway: Labuan Bajo Two Lines Title Example
          </p>
          <Div column>
            <p className="text-myDarkGreen leading-4 mt-2 order-1 md:order-2 md:line-clamp-4">
              Labuan Bajo is a tropical paradise nestled in the westernmost part
              of Flores Island, Indonesia. With its stunning landscapes,
              crystal-clear waters, and vibrant marine life, it's a gateway to
              explore the mesmerizing Komodo National Park.
            </p>
            <p className="text-myDarkGreen font-bold text-sm mt-2 order-2 md:order-1">
              Organized by Pandooin
            </p>
          </Div>
        </Div>

        <Div flex between className="mt-2 items-end lg:mt-4">
          <Div column>
            <p className="text-sm text-myDarkGreen lg:text-base">Start from</p>
            <p className="font-bold font-unbounded text-gray-300 leading-3 max-md:hidden">
              IDR 5,200,000
            </p>
            <p className="text-18 font-bold font-unbounded text-myDarkGreen lg:text-28">
              IDR 5,200,000
            </p>
          </Div>

          <Div>
            <Button
              text={"See Details"}
              className="px-4 py-2 border-2 border-myDarkGreen rounded-full hover:bg-myDarkGreen hover:text-myWhite"
            />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default DestinationItem;
