import { FaGithub, FaMapMarkerAlt, FaLink, FaTwitter } from 'react-icons/fa';

function ProfileCard({ userData, darkMode }) {
  return (
    <div className={`${darkMode ? 'bg-[#1e2a48]' : 'bg-[#fefefe]'} rounded-[15px] shadow-md p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={userData.avatar_url}
            alt={userData.name || userData.login}
            className="w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-gray-200 dark:border-gray-600"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className={`${darkMode ? 'text-white' : 'text-0c0c0d'}`}>
              <h2 className="text-xl md:text-2xl font-bold">
                {userData.name || userData.login}
              </h2>
              <p className="text-blue-500 dark:text-blue-400">@{userData.login}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>

          <p className="my-6 text-gray-700 dark:text-gray-300">
            {userData.bio || 'This profile has no bio'}
          </p>

          <UserStats
            repos={userData.public_repos}
            followers={userData.followers}
            following={userData.following}
            darkMode={darkMode}
          />

          <UserLinks
            location={userData.location}
            twitter={userData.twitter_username}
            blog={userData.blog}
            githubUrl={userData.html_url}
            username={userData.login}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

function UserStats({ repos, followers, following, darkMode }) {
  return (
    <div className={`${darkMode ? 'bg-[#141c30]': 'bg-[#f5f8ff]'} rounded-lg p-4 mb-6 transition-colors duration-300`}>
      <div className="grid grid-cols-3 gap-4 text-gray-500 dark:text-gray-400 text-center">
        <div>
          <p className={`text-sm ${darkMode ? 'text-[#ffffff]' : 'text-gray-500'}`}>Repos</p>
          <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{repos}</p>
        </div>
        <div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Followers</p>
          <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{followers}</p>
        </div>
        <div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Following</p>
          <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{following}</p>
        </div>
      </div>
    </div>
  );
}

function UserLinks({ location, twitter, blog, githubUrl, username, darkMode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className={darkMode ? 'text-gray-300' : 'text-gray-500'} />
        <span className={!location ? 'text-gray-400' : darkMode ? 'text-gray-300' : 'text-gray-700'}>
          {location || 'Not Available'}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <FaTwitter className={darkMode ? 'text-gray-300' : 'text-gray-500'} />
        <span className={!twitter ? 'text-gray-400' : darkMode ? 'text-gray-300' : 'text-gray-700'}>
          {twitter || 'Not Available'}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <FaLink className={darkMode ? 'text-gray-300' : 'text-gray-500'} />
        <a
          href={blog || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`truncate ${!blog ? 'text-gray-400' : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
        >
          {blog || 'Not Available'}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <FaGithub className={darkMode ? 'text-gray-300' : 'text-gray-500'} />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`truncate ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
        >
          @{username}
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;