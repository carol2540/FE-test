import React from "react";
import Div from "./Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="w-full bg-myGreen mt-20">
      <Wrapper className="w-full px-8 flex flex-col items-center gap-3 py-6 text-white lg:flex-row lg:justify-between">
        <Div>
          <p className="text-sm">© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
        </Div>
        <Div flex center className="gap-3">
          <Icon icon={"ic:baseline-facebook"} className="text-2xl " />
          <Icon icon={"mdi:instagram"} className="text-2xl " />
          <Icon icon={"ic:baseline-email"} className="text-2xl " />
        </Div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
