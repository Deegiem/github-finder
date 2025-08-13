import { useState } from "react";
import { FiSearch } from 'react-icons/fi';  // Note: 'fi' for Feather Icons


// Updated SearchBar.jsx
function SearchBar({ onSearch, error, loading, darkMode }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className={`relative flex items-center  ${darkMode ? 'bg-[#1c2235]' : 'bg-[#fefefe]'} rounded-[13px] shadow-md overflow-hidden`}>
        <FiSearch className={`absolute left-4 ${
          darkMode ? 'text-gray-400' : 'text-blue-500'
        }`} size={20} />
        <input
          type="text"
          placeholder="Search GitHub username..."
          className={`w-full py-4 pl-12 pr-32 outline-none ${
            darkMode ? 'bg-[#1e2a48] text-white placeholder-gray-400' : 'bg-[#fefefe] text-gray-800'
          }`}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && (
          <span className="absolute right-28 text-red-500 text-sm">
            {error}
          </span>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`absolute right-1.5 px-6 py-2.5 rounded-[10px] transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
export default SearchBar;