import { FiRefreshCw } from 'react-icons/fi';

export default function BalanceCard() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white w-full md:w-80">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Balance</h3>
        <FiRefreshCw className="cursor-pointer" />
      </div>
      <h2 className="text-2xl font-bold mt-2">$21,500.15</h2>
      <p className="text-xs text-gray-400 mt-1">21:15:30</p>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-xs text-gray-400">Daily Volume</p>
          <h4>$126.12</h4>
        </div>
        <div>
          <p className="text-xs text-gray-400">BTC Volume</p>
          <h4>0.058</h4>
        </div>
        <div>
          <p className="text-xs text-gray-400">% Amount</p>
          <h4>0.65%</h4>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-blue-600 py-2 rounded">Deposit</button>
        <button className="flex-1 bg-gray-700 py-2 rounded">Withdraw</button>
      </div>
    </div>
  );
}
