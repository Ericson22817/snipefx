'use client';

import AccountUpgrade from "@/components/AccountUpgrade";
import BeginTrading from "@/components/beginTrading";
import HeroSlider from "@/components/HeroSlider";
import LearnTradeInvest from "@/components/LearnTradeInvest";
import MarketAnalysis from "@/components/MarketAnalysis";
import MarketSection from "@/components/MarketSection";
import NewInvestment from "@/components/newInvestment";
import PremiumChoice from "@/components/premiumChoice";
import PricingSection from "@/components/PricingSection";
import TransactionMarquee from "@/components/TransactionMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import usePublicDeposits from "@/hooks/usePublicDeposits";

const withdrawals = [
  { gateway: 'Bitcoin', name: 'Rob Ludwig', amount: '$15,800', time: '6 hours ago' },
  { gateway: 'Western Union', name: 'Daniel Rankins', amount: '$17,500', time: '24 hours ago' },
  { gateway: 'Western Union', name: 'Florence M. Colon', amount: '$13,500', time: '48 hours ago' },
  { gateway: 'Bitcoin Cash', name: 'Banko Pajia', amount: '$11,000', time: '4 hours ago' },
  { gateway: 'Bitcoin', name: 'Tyra Loriso', amount: '$20,650', time: '46 hours ago' },
  { gateway: 'PerfectMoney', name: 'James Vick', amount: '$10,650', time: '30 hours ago' },
  { gateway: 'PerfectMoney', name: 'Dorothy Lisa', amount: '$23,750', time: '5 hours ago' },
  { gateway: 'Bitcoin', name: 'Christal James', amount: '$5,700', time: '20 hours ago' },
  { gateway: 'Bitcoin', name: 'Kim Valentine', amount: '$1,800', time: '60 hours ago' },
];

export default function Home() {
  const { deposits } = usePublicDeposits();

  return (
    <div>
      <HeroSlider />
      <MarketSection />
      <LearnTradeInvest />
      <PremiumChoice />
      <BeginTrading />
      <AccountUpgrade />
      <TransactionMarquee title="Latest Deposits" data={deposits} />
      <TransactionMarquee title="Latest Withdrawals" data={withdrawals} />
      <WhyChooseUs />
      <PricingSection />
      <NewInvestment />
      <MarketAnalysis />
    </div>
  );
}
