import React from "react";
import Wrapper from "./Wrapper";
import Div from "./Div";

import logo from "../../public/images/logo/Zamrood-color.svg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  return (
    <nav className="w-full bg-myWhite shadow-lg sticky top-0 z-50">
      <Wrapper className="flex justify-between items-center p-4 md:px-8">
        <Div>
          <Link href={"/"}>
            <Image src={logo} width={134} alt="logo" />
          </Link>
        </Div>

        <Div>
          <Div className="p-3 border rounded-full border-myGreen lg:hidden">
            <Icon
              icon={"iconamoon:menu-burger-horizontal-bold"}
              className="text-xl text-myGreen"
            />
          </Div>
        </Div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
