import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import DestinationItem from "./DestinationItem";
import SmallDestinationItem from "./SmallDestinationItem";
import { getDatas } from "@/lib/HTTPConnect";

const Destinations = async () => {
  let data = null;
  try {
    data = await getDatas();
  } catch (error) {
    console.log(error);
  }

  return (
    <section className="w-full px-4 md:px-8 lg:px-0">
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

        <Div column itemsCenter full className="gap-8 md:gap-16">
          {data.data?.map((item: any, index: number) => (
            <DestinationItem
              key={index}
              direction={index % 2 ? "rtl" : "ltr"}
              itinerary_name={item.itinerary_name}
              description={item.itinerary_short_description}
              partner_name={item.partner_name}
              itinerary_variant_pub_price={
                item.related_variant.itinerary_variant_pub_price
              }
              image={item.related_galleries}
            />
          ))}
        </Div>

        <Div column full itemsCenter className="gap-8">
          <Div
            full
            flex
            itemsCenter
            className="overflow-x-scroll gap-3 mt-10 scrollbar-none lg:gap-5"
          >
            <SmallDestinationItem
              itinerary_name={"[PREMIUM TRIP] Best of Ubud 3D2N"}
              partner_name={"Pandooin"}
              itinerary_variant_pub_price={"5755000"}
              image={
                "https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/premium-trip-best-of-ubud-3d2n/iNQGVuffHarZ0jeiXq3uLsrgT2xdceymVtdebAo4.jpg"
              }
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi"
              }
              partner_name={"Pandooin"}
              itinerary_variant_pub_price={"7500000"}
              image={
                "https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/premium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi/S3TRAnYrcDnQOLgLxUEivqy4gI2Y2ebA18xXjCY4.jpg"
              }
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Thousand Island: Staycation in Private Island (Asha Resort)"
              }
              partner_name={"Pandooin"}
              itinerary_variant_pub_price={"1900000"}
              image={
                "https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/premium-trip-staycation-in-asha-resort/93Orp8cZf9xftshaA5aRHk6ieB1eCpqnUHbIotet.jpg"
              }
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi"
              }
              partner_name={"Pandooin"}
              itinerary_variant_pub_price={"7500000"}
              image={
                "https://ik.imagekit.io/pandooin/tr:pr-true/production/images/itinerary/canyoneering-curug-cikondang-2d1n/UrVTwoOUK3Cw2zlQdhixck1TiZP5vT7NUEj2DKNi.jpg"
              }
            />
          </Div>

          <Div>
            <Div flex itemsCenter className="gap-3 group cursor-pointer">
              <Div className="p-1 rounded-full border-2 border-myDarkGreen group-hover:border-myGold">
                <Icon
                  icon={"icon-park-outline:right"}
                  className="text-myDarkGreen text-xl group-hover:text-myGold"
                />
              </Div>
              <p className="uppercase font-semibold text-myDarkGreen group-hover:text-myGold">
                explore more
              </p>
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default Destinations;
