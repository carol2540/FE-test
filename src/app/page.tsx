import BeyondPremium from "@/components/homepage/BeyondPremium";
import Destinations from "@/components/homepage/Destinations";
import Header from "@/components/homepage/Header";
import Separator from "@/components/homepage/Separator";

export default function Home() {
  return (
    <>
      <Header />
      <BeyondPremium />
      <Separator />
      <Destinations />
    </>
  );
}
