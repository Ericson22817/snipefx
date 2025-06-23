'use client';

import React from 'react';
import { FaMoneyBillWave, FaExchangeAlt, FaChartLine } from 'react-icons/fa';
import { MdOutlineTrendingUp } from 'react-icons/md';
import { AiOutlineStock } from 'react-icons/ai';
import { SiEthereum, SiBitcoin } from 'react-icons/si';
import { RiExchangeDollarLine } from 'react-icons/ri';

import useUser from '@/hooks/useAuth';
import useWallet from '@/hooks/useWallet';
import Link from 'next/link';

function formatCurrency(value: number | undefined) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value || 0);
}

export default function Dashboard() {
  const { user } = useUser();
  const { wallet } = useWallet();

  const {
    balance = 0,
    earnings = 0,
    pendingWithdrawal = 0,
    activeDeposits = 0,
    lastDeposit = 0,
    // totalDeposit = 0,
    // successfulDeposit = 0,
    // pendingDeposit = 0,
  } = wallet || {};

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Welcome Section */}
      <p className="p-4 text-3xl">Welcome {user?.firstName}</p>

      {/* Total Balance */}
      <div className="mx-4 mt-6 bg-[#1f1f1f] p-4 rounded-xl shadow-lg">
        <div className="text-lg font-semibold mb-4">Total Balance</div>
        <div className="text-3xl font-bold mb-6">{formatCurrency(balance)}</div>

        {/* Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  <Link href="/dashboard/deposit" className="flex flex-col items-center hover:opacity-80">
    <FaMoneyBillWave className="text-2xl text-purple-400" />
    <span>Deposit</span>
  </Link>

  <Link href="/dashboard/transactions" className="flex flex-col items-center hover:opacity-80">
    <FaExchangeAlt className="text-2xl text-purple-400" />
    <span>Transactions</span>
  </Link>

  <Link href="/dashboard/withdraw" className="flex flex-col items-center hover:opacity-80">
    <FaChartLine className="text-2xl text-purple-400" />
    <span>Withdraw</span>
  </Link>

  <div className="flex flex-col items-center">
    <MdOutlineTrendingUp className="text-2xl text-cyan-400" />
    <span className="text-cyan-400 text-center">0%<br />Trading Progress</span>
  </div>
</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6 px-4 text-center">
        {[
          ['Earning', earnings],
          ['Pending Withdrawal', pendingWithdrawal],
          ['Active Deposits', activeDeposits],
          ['Last Deposit', lastDeposit],
        ].map(([label, value], index) => (
          <div key={index} className="bg-[#2b2b2b] p-4 rounded-lg">
            <div className="text-sm text-gray-400">{label}</div>
            <div className="text-lg font-semibold">{formatCurrency(Number(value))}</div>
          </div>
        ))}
      </div>

      {/* Ticker */}
      <div className="mt-6 px-4">
        <div className="bg-[#1f1f1f] p-2 rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2"><AiOutlineStock /> Nasdaq 100: <span className="text-red-500">-0.07%</span></div>
          <div className="flex items-center gap-2"><RiExchangeDollarLine /> EUR/USD: <span className="text-green-400">+0.11%</span></div>
          <div className="flex items-center gap-2"><SiBitcoin /> BTC/USD: <span className="text-red-400">-0.02%</span></div>
          <div className="flex items-center gap-2"><SiEthereum /> ETH/USD: <span className="text-red-500">-0.60%</span></div>
          <div className="flex items-center gap-2"><AiOutlineStock /> S&P 500: <span className="text-green-400">+0.09%</span></div>
          <div className="flex items-center gap-2"><SiBitcoin /> BTC/ETH: <span className="text-red-500">-0.15%</span></div>
        </div>
      </div>

      {/* BTC Chart */}
      <div className="mt-6 px-4 mb-4">
        <div className="bg-[#1f1f1f] p-4 rounded-lg">
          <div className="mb-2 font-medium">BTC/USD</div>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e98cf&symbol=BITSTAMP%3ABTCUSD&interval=1D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hidevolume=1"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency={true}
            allowFullScreen={true}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
