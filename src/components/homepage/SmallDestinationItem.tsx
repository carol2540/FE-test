import React from "react";
import Div from "../Div";
import Image from "next/image";

import { Icon } from "@iconify/react/dist/iconify.js";
import { formatRupiah } from "@/lib/utils";

const SmallDestinationItem = ({
  itinerary_name,
  partner_name,
  image,
  itinerary_variant_pub_price,
}: {
  itinerary_name: string;
  partner_name: string;
  image: string;
  itinerary_variant_pub_price: string;
}) => {
  return (
    <Div className="min-w-60 space-y-4 pb-6 lg:w-[24%]">
      <Div full className="overflow-hidden">
        <Image
          src={image}
          width={400}
          height={400}
          alt="image"
          className="w-full aspect-square object-cover object-center"
        />
      </Div>

      <Div>
        <Div column full className="text-myGreen">
          <p className="text-sm uppercase">7 DAYS 6 NIGHTS</p>
          <p className="font-bold font-unbounded line-clamp-2">
            {itinerary_name}
          </p>
          <p className="text-myDarkGreen font-bold text-sm lg:text-base">
            Organized by {partner_name}
          </p>
        </Div>

        <Div column className="mt-2  items-start">
          <Div column>
            <p className="text-sm text-myDarkGreen ">Start from</p>
            <p className="font-bold font-unbounded text-myDarkGreen">
              {formatRupiah(+itinerary_variant_pub_price)}
            </p>
          </Div>

          <Div
            flex
            itemsCenter
            className="gap-3 mt-2 group cursor-pointer transition-all pb-1 border-b-2 border-myWhite hover:border-b-2 hover:border-myGold"
          >
            <p className="text-myDarkGreen group-hover:text-myGold">
              See Details
            </p>
            <Icon
              icon={"ant-design:swap-right-outlined"}
              className="group-hover:text-myGold"
            />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SmallDestinationItem;
