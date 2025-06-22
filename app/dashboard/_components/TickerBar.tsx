export default function TickerBar() {
  const items = [
    { symbol: 'ADA', price: '$0.59', change: '-47.97%' },
    { symbol: 'DOGE', price: '$0.168', change: '-56.26%' },
    { symbol: 'DOT', price: '$3.484', change: '-58.04%' },
    { symbol: 'CRO', price: '$0.090', change: '-43.60%' },
  ];

  return (
    <div className="bg-gray-900 text-white px-4 py-2 overflow-x-auto whitespace-nowrap">
      {items.map((it, i) => (
        <span
          key={i}
          className="inline-block mr-8 text-sm last:mr-0"
        >
          {it.symbol} {it.price}{' '}
          <span className={`ml-1 ${it.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
            {it.change}
          </span>
        </span>
      ))}
    </div>
  );
}
