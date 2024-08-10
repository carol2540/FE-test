import React from "react";
import Wrapper from "../Wrapper";
import Div from "../Div";
import ArticleItem from "./ArticleItem";
import { getArticle } from "@/lib/HTTPConnect";

const listArticle = [
  {
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    image: "/images/header-image.svg",
  },
  {
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    image: "/images/header-image.svg",
  },
  {
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    image: "/images/header-image.svg",
  },
  {
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    image: "/images/header-image.svg",
  },
  {
    title: "7 Best Places to Dive in Indonesia: From Bali to Wakatobi",
    image: "/images/header-image.svg",
  },
];

const Articles = async () => {
  let data = null;
  try {
    data = await getArticle();
  } catch (error) {
    console.log(error);
  }

  const article = data.data;

  return (
    <section className="w-full px-4 my-10 md:px-8 lg:px-0">
      <Wrapper className="w-full space-y-4">
        <Div full className="text-myGreen">
          <h1 className="font-unbounded text-22 font-semibold lg:text-36">
            Articles
          </h1>
          <p className="lg:text-24">
            Our curated writings, offering something for every reader.
          </p>
        </Div>

        <Div full column className="gap-4 md:hidden">
          {article?.map((article: any, index: React.Key | null | undefined) => (
            <ArticleItem
              key={index}
              title={article.title}
              image={article.featured_image}
              imageDescription={article.featured_image_caption}
            />
          ))}
        </Div>

        <Div
          full
          column
          className="gap-4 md:grid md: grid-cols-2 lg:hidden max-md:hidden"
        >
          {article
            .slice(0, 4)
            .map((article: any, index: React.Key | null | undefined) => (
              <ArticleItem
                key={index}
                title={article.title}
                image={article.featured_image}
                imageDescription={article.featured_image_caption}
              />
            ))}
        </Div>

        <Div full column className="gap-4 grid grid-cols-2 max-lg:hidden">
          <Div>
            <ArticleItem
              noRatio
              className="w-full h-full"
              title={article[0].title}
              image={article[0].featured_image}
              imageDescription={article[0].featured_image_caption}
            />
          </Div>
          <Div gridCols={2} grid gap={3}>
            {article
              .slice(1, 5)
              .map((article: any, index: React.Key | null | undefined) => (
                <ArticleItem
                  key={index}
                  title={article.title}
                  image={article.featured_image}
                  imageDescription={article.featured_image_caption}
                />
              ))}
          </Div>
        </Div>
      </Wrapper>
    </section>
  );
};

export default Articles;
