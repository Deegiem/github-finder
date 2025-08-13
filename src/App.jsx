import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';

function App() {
  const [darkMode, setDarkMode] = useState(false); 
  const [username, setUsername] = useState('octocat');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    }, [darkMode]);

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(username);
  }, [username]);

  const handleSearch = (username) => {
    setUsername(username);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${darkMode ? 'bg-[#060b15]' : 'bg-[#f3f8fe]'}`}>
      <div className="container mx-auto px-5 py-8 max-w-6xl">
        <Header darkMode={darkMode} onThemeChange={toggleDarkMode} />

        <SearchBar darkMode={darkMode} onSearch={handleSearch} error={error} loading={loading} />
        {loading && !userData ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : userData ? (
          <ProfileCard darkMode={darkMode} userData={userData} />
        ) : (
          <div
            className={`rounded-lg shadow-md p-8 text-center transition-colors duration-500 ease-in-out ${
              darkMode ? 'bg-[#1e2a48] text-gray-200' : 'bg-white text-gray-900'
            }`}
          >
            <p>{error || 'No user data available'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
