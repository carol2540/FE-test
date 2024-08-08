import React from "react";
import Div from "../Div";
import Image from "next/image";

import image from "../../../public/images/icon1.svg";
import image2 from "../../../public/images/icon2.svg";
import image3 from "../../../public/images/icon3.svg";

import paint from "../../../public/images/paint.svg";
import Button from "../Button";
import Wrapper from "../Wrapper";

const beyondList = [
  {
    image: image,
    title: "Personalized Itineraries",
    desc: "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
  },
  {
    image: image2,
    title: "Personalized Itineraries",
    desc: "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
  },
  {
    image: image3,
    title: "Personalized Itineraries",
    desc: "Our premium travel services offer tailor-made itineraries crafted to suit your unique preferences and desires.",
  },
];

const BeyondPremium = () => {
  return (
    <section className="w-full py-16 bg-myWhite">
      <Wrapper className="w-full flex flex-col items-center px-3 lg:gap-6 lg:px-0">
        <Div column itemsCenter relative>
          <h1 className="text-54 font-signature text-myGreen lg:text-86">
            Beyond Premium
          </h1>
          <h2 className="text-22 font-unbounded relative -top-8 font-bold text-myDarkGreen lg:text-32 lg:-top-12">
            Elevate Your Experience
          </h2>
        </Div>

        <Div
          full
          column
          relative
          itemsCenter
          className="-top-5 gap-4 lg:flex-row lg:gap-0 "
        >
          {beyondList.map((item, index) => (
            <Div
              column
              itemsCenter
              className="text-center max-w-[90%]"
              key={index}
            >
              <Image src={item.image} width={128} alt="image" />
              <h2 className="font-bold text-myGreen uppercase text-lg lg:text-24">
                {item.title}
              </h2>
              <p className="text-sm md:max-w-[70%] lg:text-base">{item.desc}</p>
            </Div>
          ))}
        </Div>

        <Div
          full
          relative
          column
          itemsCenter
          className="mt-10 lg:flex-row lg:justify-center lg:max-w-[75%] lg:gap-3"
        >
          <Image src={paint} alt="image" width={500} className="w-52 lg:w-96" />

          <Div
            full
            relative
            column
            itemsCenter
            className="text-center lg:text-start lg:items-start"
          >
            <h1 className="text-22 font-bold font-unbounded text-myDarkGreen lg:text-32">
              Discover Tailored Experiences
            </h1>
            <p className="text-sm max-w-[90%] md:max-w-[70%] lg:text-base lg:max-w-[90%]">
              Create your own journey, personalized to suit your preferences and
              interests, ensuring a once-in-a-lifetime adventure awaits.
            </p>
            <Button
              text={"Customize your trip"}
              className="bg-myDarkGreen text-white font-semibold md:w-56 hover:bg-myGold "
            />
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default BeyondPremium;
