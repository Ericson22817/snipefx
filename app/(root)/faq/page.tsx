'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: 'What is Forex?', answer: 'The foreign exchange market (forex, FX, or currency market) is a worldwide decentralized over-the-counter financial market for the trading of currencies. The foreign exchange market is the largest and most liquid financial market in the world. Traders include large banks, central banks, currency speculators, corporations, governments, and other financial institutions. The average daily volume in the global foreign exchange and related markets is continuously growing. Daily turnover was reported to be over US $3.98 trillion in April 2010 by the Bank for International Settlements' },
  { question: 'Are there fees for depositing?', answer: 'There are no fees for depositing with either Credit/Debit card or even Wire Transfer. When depositing or withdrawing via Bitcoin, ALERTSIGNALSNATION will not charge a fee, however, there is a standard networking fee of 0.0005 BTC when allocating funds through the Blockchain network.' },
  { question: 'How do I know that the funds have reached us?', answer: 'These will be credited to your vault automatically, once the funds have been received. You will also receive an email notification once the funds have been received.' },
  { question: 'How long does it take for funds to appear?', answer: 'If you send funds from your Bitcoin wallet then typically the funds will credit when they reach 6 confirmations, a process that can take up to 6 hours. You can check the progress here of your deposit using the Bitcoin address that was provided to you upon making the deposit request on the following website: www.blockchain.com Once the funds reach our accounts these are instantly and automatically credited to your vault.' },
  { question: 'What are my depositing options?', answer: 'We do not currently offer multiple deposit methods including, Credit/Debit Card and Bank Wire Transfer. For Bitcoin deposits, select the Bitcoin deposit method and proceed to input the details of your deposit. You will be given a Bitcoin address to which you can send your funds and they will be loaded to your account upon receipt. The minimum deposit in BTC is 50 GBP' },
  {
    question: 'How can I change my e-mail address or password?',
    answer:
      'Log into your alertsignalsnation.uk account and click on the "Account Information". You can change your e-mail address and password there.',
  },
];

export default function CompanyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(5); // the last one is open by default

  return (
    <div className="bg-gray-100 max-w-3xl mx-auto mt-10 mb-10 text-black px-6 sm:px-8 md:px-16 lg:px-24 py-12 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Company Faq</h1>
      <p className="text-gray-700 mb-4 max-w-3xl leading-relaxed">
        The Financial Conduct Authority is a financial regulatory body in the United Kingdom, but operates
        independently of the UK Government, and is financed by charging fees to members of the financial
        services industry. We are NOT required to be regulated by The Financial Conduct Authority as a
        result we are NOT regulated by the Financial Conduct Authority. We are an educational company who
        provides insights into the Forex Markets.
      </p>
      <p className="text-gray-700 max-w-3xl leading-relaxed mb-8">
        Trade ideas (Signals) that we send are not intended for the purpose of live investment. They are
        intended for you to use as part of your analysis so you can understand forex better. Choosing to
        place a trade that we have commentated over is your own choice and we suggest speaking to a financial
        advisor before placing any trades on a live account. We are NOT financial Advisors, we ARE Educators
        and are regulated as a business by Companies House-HMRC.
      </p>

      <hr className="my-6 border-gray-300" />

      {/* FAQs */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-transparent border-b border-gray-300 pb-2">
            <button
              className="w-full flex justify-between items-center text-left text-base font-medium text-gray-900 hover:text-black"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {faq.answer ? (
                openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {faq.answer && openIndex === index && (
              <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-white p-4 rounded shadow mt-10 max-w-xl text-center text-sm text-gray-600">
        For general inquiries please contact{' '}
        <a href="mailto:support@citrustfxoptions.com" className="text-blue-600 font-medium">
          support@citrustfxoptions.com
        </a>
      </div>
    </div>
  );
}
