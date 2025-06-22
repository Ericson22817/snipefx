import { FiSearch, FiBell, FiUser, FiSettings } from 'react-icons/fi';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-2">
        <FiSearch size={20} />
        <input
          type="search"
          placeholder="Search..."
          className="hidden sm:inline bg-gray-800 px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FiBell size={20} />
        <FiUser size={20} />
        <FiSettings size={20} />
      </div>
    </header>
  );
}
