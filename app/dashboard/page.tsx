'use client';

import React from 'react';
import { FaMoneyBillWave, FaExchangeAlt, FaChartLine } from 'react-icons/fa';
import { MdOutlineTrendingUp } from 'react-icons/md';
import { AiOutlineStock } from 'react-icons/ai';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { SiEthereum, SiBitcoin } from 'react-icons/si';
import { GiGoldBar, GiOilDrum } from 'react-icons/gi';
import { BsFillBarChartFill } from 'react-icons/bs';
import { SiApple, SiTesla } from 'react-icons/si';

import useUser from '@/hooks/useAuth';
import useWallet from '@/hooks/useWallet';
import Link from 'next/link';

function formatCurrency(value: number | undefined)
{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value || 0);
}

export default function Dashboard()
{
    const items = [
        {
            label: 'Nasdaq 100',
            value: '-0.07%',
            color: 'red',
            icon: <AiOutlineStock />,
        },
        {
            label: 'EUR/USD',
            value: '+0.11%',
            color: 'green',
            icon: <RiExchangeDollarLine />,
        },
        {
            label: 'BTC/USD',
            value: '-0.02%',
            color: 'red',
            icon: <SiBitcoin />,
        },
        {
            label: 'ETH/USD',
            value: '-0.60%',
            color: 'red',
            icon: <SiEthereum />,
        },
        {
            label: 'S&P 500',
            value: '+0.09%',
            color: 'green',
            icon: <BsFillBarChartFill />,
        },
        {
            label: 'BTC/ETH',
            value: '-0.15%',
            color: 'red',
            icon: <SiBitcoin />,
        },
        {
            label: 'Gold',
            value: '+0.23%',
            color: 'green',
            icon: <GiGoldBar />,
        },
        {
            label: 'Crude Oil',
            value: '-1.02%',
            color: 'red',
            icon: <GiOilDrum />,
        },
        {
            label: 'US 10Y Yield',
            value: '+0.07%',
            color: 'green',
            icon: <BsFillBarChartFill />,
        },
        {
            label: 'GBP/USD',
            value: '-0.30%',
            color: 'red',
            icon: <RiExchangeDollarLine />,
        },
        {
            label: 'AAPL',
            value: '+1.15%',
            color: 'green',
            icon: <SiApple />,
        },
        {
            label: 'TSLA',
            value: '-2.40%',
            color: 'red',
            icon: <SiTesla />,
        },
    ];
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
            <div className="mt-6 px-4 overflow-hidden">
                <div className="whitespace-nowrap animate-scroll flex gap-8 text-sm text-gray-300">
                    {[...items, ...items].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 min-w-max">
                            {item.icon}
                            {item.label}:{' '}
                            <span className={item.color === 'red' ? 'text-red-500' : 'text-green-400'}>
                                {item.value}
                            </span>
                        </div>
                    ))}
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
                        allowFullScreen={true}
                        className="rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
