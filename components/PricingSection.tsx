import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="bg-black text-white  py-12 px-4 md:px-12">
      <div className="text-center mb-12">
        <p className="text-sm text-white">Trade with confidence</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Complete package for every <span className="text-blue-500">traders</span>
        </h2>
      </div>

      {/* Pricing Boxes */}
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6">
        {/* Starter */}
        <Card
          title="STARTER ACCOUNT"
          price="$500"
          benefits={[
            "min. possible deposit: $500",
            "min. Expected profit: $3,500",
            "max. Expected profit: $5,000",
            "Highly-regarded trader education*",
            "Advanced risk management",
            "Tax-free spread betting profits",
            "Low minimum deposit",
          ]}
        />

        {/* Classic */}
        <Card
          title="CLASSIC ACCOUNT"
          price="$5,000"
          benefits={[
            "min. possible deposit: $5,000",
            "min. expected profit: $45,000",
            "max. expected profit: $50,000",
            "Expert news & analysis",
            "Competitive spreads",
            "Advanced trading tools",
            "Tax-free spread betting profits",
          ]}
        />

        {/* Platinum */}
        <Card
          title="PLATINUM"
          price="$10,000"
          benefits={[
            "min. possible deposit: $10,000",
            "min. expected profit: $99,999",
            "With Full Executive benefits..",
            "Highly-regarded trader education*",
            "Advanced risk management",
            "Tax-free spread betting profits",
            "Low minimum deposit",
          ]}
        />

        {/* Forex Signals */}
        <Card
          title="FOREX SIGNALS"
          price=""
          benefits={[
            "Professional Forex Signals",
            "Up to 10 Signals/day",
            "95% Success Rate",
            "Support 24/7",
            "Advanced trading tools",
            "Pay using bitcoin only",
            "Use any broker",
          ]}
        />
      </div>

      {/* Feature Icons */}
      <div className="grid grid-cols-2 md:grid-cols-6 max-w-6xl mx-auto gap-4 mt-12 text-sm text-center text-white">
        <FeatureIcon label="Enhanced Tools" icon="🛠️" />
        <FeatureIcon label="Trading Guides" icon="📘" />
        <FeatureIcon label="Fast execution" icon="⚡" />
        <FeatureIcon label="Less Commission" icon="💸" />
        <FeatureIcon label="Globally licensed" icon="🏛️" />
        <FeatureIcon label="Fund security" icon="🛡️" />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  price: string;
  benefits: string[];
}

function Card({ title, price, benefits }: CardProps) {
  return (
    <div className="border border-blue-500 rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-bold">
        {title}{" "}
        {price && <span className="text-blue-500">{price}</span>}
      </h3>
      <p className="text-sm text-gray-400">Benefit from industry-leading entry prices</p>
      <ul className="space-y-2 text-sm">
        {benefits.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-blue-500 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-max text-sm mt-4 hover:bg-blue-700">
        Open an account
      </button>
    </div>
  );
}

interface FeatureIconProps {
  label: string;
  icon: string;
}

function FeatureIcon({ label, icon }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
