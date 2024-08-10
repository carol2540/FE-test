import React from "react";
import Div from "../Div";

import Button from "../Button";
import { cn, formatRupiah } from "@/lib/utils";
import ImageSlider from "./ImageSlider";
import { ItineraryGallery } from "@/lib/type";

export interface DestinationItemProps {
  direction?: "ltr" | "rtl";
  itinerary_name: string;
  description?: string;
  partner_name: string;
  image: ItineraryGallery[];
  itinerary_variant_pub_price: string;
  index?: number;
}

const DestinationItem = ({
  direction = "ltr",
  itinerary_name,
  description,
  partner_name,
  image,
  itinerary_variant_pub_price,
}: DestinationItemProps) => {
  return (
    <Div full column className="gap-3 md:flex-row md:items-center lg:gap-8">
      <Div
        full
        className={cn(
          "basis-1/2 overflow-hidden",
          direction == "ltr" ? "md:order-1" : "md:order-2"
        )}
      >
        <ImageSlider data={image} />
      </Div>

      <Div
        className={cn(
          "basis-1/2",
          direction == "ltr" ? "md:order-2" : "md:order-1"
        )}
      >
        <Div column full className="text-myGreen">
          <p className="text-sm uppercase lg:text-base">7 DAYS 6 NIGHTS</p>
          <h2 className="font-bold font-unbounded line-clamp-2 lg:text-36">
            {itinerary_name}
          </h2>
          <Div column>
            <p className="text-myDarkGreen leading-4 mt-2 order-1 md:order-2 line-clamp-4">
              {description}
            </p>
            <p className="text-myDarkGreen font-bold text-sm mt-2 order-2 md:order-1">
              Organized by {partner_name}
            </p>
          </Div>
        </Div>

        <Div flex between className="mt-2 items-end lg:mt-4">
          <Div column>
            <p className="text-sm text-myDarkGreen lg:text-base">Start from</p>
            <p className="font-semibold font-unbounded line-through text-gray-300 leading-3 max-md:hidden md:text-sm">
              {formatRupiah(+itinerary_variant_pub_price + 1000000)}
            </p>
            <p className="text-18 font-semibold font-unbounded text-myDarkGreen lg:text-28">
              {formatRupiah(+itinerary_variant_pub_price)}
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
