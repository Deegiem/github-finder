import { FaMoon, FaSun } from 'react-icons/fa';

function Header({ darkMode, onThemeChange }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1
        className={`text-2xl font-bold transition-colors duration-500 ease-in-out ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        <a href="https://www.linkedin.com/in/al-ameen-akinade-dee06">devfinder</a>
      </h1>
      <button
        onClick={onThemeChange}
        className={`flex items-center gap-2 transition-colors duration-500 ease-in-out ${
          darkMode ? 'text-white hover:text-yellow-400' : 'text-gray-900 hover:text-blue-500'
        }`}
      >
        <span className="text-[16px] font-semibold">
          {darkMode ? 'LIGHT' : 'DARK'}
        </span>
        {darkMode ? (
          <FaSun className="text-white-400 transition-colors duration-500 ease-in-out" size={18} />
        ) : (
          <FaMoon className="transition-colors duration-500 ease-in-out" size={18} />
        )}
      </button>
    </header>
  );
}

export default Header;
