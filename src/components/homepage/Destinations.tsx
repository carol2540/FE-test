import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import { Icon } from "@iconify/react/dist/iconify.js";
import Destination_Item from "./Destination_Item";
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
    <section id="destinations" className="w-full px-4 md:px-8 lg:px-0">
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
            <Destination_Item
              key={item.id || index}
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
              partner_name={"pandooin"}
              itinerary_variant_pub_price={"5755000"}
              image={"/images/PoolBali.jpeg"}
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi"
              }
              partner_name={"pandooin"}
              itinerary_variant_pub_price={"7500000"}
              image={"/images/boatView.jpeg"}
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Thousand Island: Staycation in Private Island (Asha Resort)"
              }
              partner_name={"pandooin"}
              itinerary_variant_pub_price={"1900000"}
              image={"/images/beachTent.jpeg"}
            />
            <SmallDestinationItem
              itinerary_name={
                "[PREMIUM TRIP] Labuan Bajo: Liveboard in VINCA VOYAGES Phinisi"
              }
              partner_name={"pandooin"}
              itinerary_variant_pub_price={"7500000"}
              image={"/images/hotelTent.jpeg"}
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