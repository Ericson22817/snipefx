import BeginTrading from "@/components/beginTrading";
import HeroSlider from "@/components/HeroSlider";
import LearnTradeInvest from "@/components/LearnTradeInvest";
import MarketSection from "@/components/MarketSection";
import PremiumChoice from "@/components/premiumChoice";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <HeroSlider/>
     <MarketSection/>
     <LearnTradeInvest/>
     <PremiumChoice/>
     <BeginTrading/>
    </div>
  );
}
