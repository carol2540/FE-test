import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import DestinationItem from "./DestinationItem";

const Destinations = () => {
  return (
    <section className="w-full px-3">
      <Wrapper className="w-full flex flex-col gap-6">
        <Div className="space-y-2 lg:flex lg:items-center lg:gap-3">
          <h1 className="text-24 font-bold font-unbounded text-myDarkGreen lg:text-36">
            Destinations
          </h1>

          <Div flex itemsCenter className="gap-3 group cursor-pointer">
            <Div className="p-1 rounded-full border-2 border-myDarkGreen group-hover:border-myGold">
              <Icon
                icon={"icon-park-outline:right"}
                className="text-myDarkGreen text-3xl group-hover:text-myGold"
              />
            </Div>
            <p className="uppercase font-semibold text-myDarkGreen group-hover:text-myGold">
              explore more
            </p>
          </Div>
        </Div>

        <Div column itemsCenter full className="gap-8 md:gap-12">
          <DestinationItem />
          <DestinationItem direction="rtl" />
          <DestinationItem />
          <DestinationItem direction="rtl" />
        </Div>
      </Wrapper>
    </section>
  );
};

export default Destinations;
