import Articles from "@/components/homepage/Articles";
import Banner from "@/components/homepage/Banner";
import Premium from "@/components/homepage/Premium";
import Destinations from "@/components/homepage/Destinations";
import Header from "@/components/homepage/Header";
import LuxuryFootages from "@/components/homepage/LuxuryFootages";
import Divider from "@/components/homepage/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <Premium />
      <Divider />
      <Destinations />
      <LuxuryFootages />
      <Banner />
      <Articles />
    </>
  );
}
