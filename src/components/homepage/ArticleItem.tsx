import React from "react";
import Div from "../Div";
import Image from "next/image";

import paint from "../../../public/images/header-image.svg";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/lib/utils";
interface ArticleItemProps {
  className?: string;
  noRatio?: boolean;
  image: string;
  title: string;
  imageDescription: string;
}

const ArticleItem = ({
  className,
  noRatio,
  title,
  image,
  imageDescription,
}: ArticleItemProps) => {
  return (
    <Div
      pointer
      className={cn(
        "rounded-sm relative overflow-hidden group shadow-md group:",
        className
      )}
    >
      {noRatio ? (
        <Image
          src={image}
          width={500}
          height={400}
          alt={imageDescription}
          className="w-full h-full aspect-square object-cover object-center grayscale transition-all hover:grayscale-0"
        />
      ) : (
        <Image
          src={image}
          width={500}
          height={400}
          alt={imageDescription}
          className="w-full h-full aspect-square object-cover object-center grayscale transition-all hover:grayscale-0"
        />
      )}

      <Div
        full
        className="p-5 bg-myGreen absolute left-0 bottom-0 lg:-bottom-20 group-hover:bottom-0 ease-out duration-500"
      >
        <h2 className="text-white line-clamp-2 font-semibold leading-4">
          {title}
        </h2>
      </Div>
    </Div>
  );
};

export default ArticleItem;
