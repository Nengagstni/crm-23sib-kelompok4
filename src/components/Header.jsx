import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm border-b sticky top-0 z-10"
      style={{ backgroundColor: '#1D5B5C' }}>
      
      <div className="text-sm text-white">
        Pages / <span className="font-semibold">Dashboard</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 pl-10 text-sm rounded-full focus:outline-none bg-white text-gray-700 placeholder-gray-400"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-2 text-sm cursor-pointer text-white hover:text-yellow-300">
          <User className="w-4 h-4" />
          Sign In
        </div>
      </div>
    </header>
  );
};

export default Header;
