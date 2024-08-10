import React from "react";
import Div from "../Div";
import Wrapper from "../Wrapper";
import Button from "../Button";
import Image from "next/image";

import background from "../../../public/images/header-image.svg";

const Header = () => {
  return (
    <header className="w-full relative h-screen object-cover object-center px-2 flex flex-col items-center justify-center md:h-[80vh] md:px-20 lg:h-screen max-h-[900px] lg:items-start">
      <Wrapper className="text-center lg:text-start">
        <Div relative>
          <h1 className="font-signature text-myGold text-86 lg:text-[128px]">
            Premium Travel
          </h1>
          <h2 className="text-24 font-bold relative font-unbounded -top-14 text-white lg:text-54 lg:-top-20">
            Beyond Expectation
          </h2>
        </Div>
        <Div className="text-white -mt-10 md:-mt-12 lg:-mt-20">
          <p className="lg:text-24 max-w-[700px]">
            Experience the finest that Indonesia has to offer with our curated
            selection of premium trips, ensuring comfort every step of the way
          </p>
          <Button
            text={"Take me there"}
            className="hover:bg-myGold hover:border-myGold w-40"
          />
        </Div>
      </Wrapper>

      <Div absolute full Hfull className="inset-0 -z-10">
        <Image
          src={background}
          fill
          priority
          className="object-cover object-center"
          alt="image"
        />
      </Div>
    </header>
  );
};

export default Header;
