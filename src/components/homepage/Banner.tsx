import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";

import paint from "../../../public/images/logo/Zamrood-white.svg";
import back from "../../../public/images/header-image.svg";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Banner = () => {
  return (
    <Wrapper className="w-full relative">
      <Div
        full
        column
        center
        relative
        className="my-16 py-10 gap-4 lg:flex-row lg:justify-between lg:px-10 object-cover object-center"
      >
        <Div>
          <Image
            src={paint}
            width={600}
            alt="image"
            className="w-36 object-cover object-center"
          />
        </Div>

        <Div
          column
          className="text-white max-w-[65%] text-center gap-2 lg:text-end"
        >
          <p className="text-sm lg:text-base">
            Want to see other destinations? Check us out at our website
          </p>
          <Div
            flex
            center
            className="gap-1 cursor-pointer items-end lg:self-end"
          >
            <a
              href="https://pandooin.com/id"
              target="_blank"
              className="font-bold lg:text-20"
            >
              Pandooin.com
            </a>
            <Icon
              icon="iconamoon:arrow-top-right-1-light"
              className="text-xl"
            />
          </Div>
        </Div>

        <Div full Hfull absolute className="inset-0 -z-10">
          <Image
            src={back}
            fill
            alt="image"
            className="object-cover object-center"
          />
        </Div>
      </Div>
    </Wrapper>
  );
};

export default Banner;
