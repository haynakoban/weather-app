import { useState } from 'react';
import useWeatherStore from '../store/useWeatherStore';

const SearchCities = () => {
  const [searchKey, setSearchKey] = useState('');
  const { searchWeather, getWeatherForecast, updateMyLocation } =
    useWeatherStore();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchKey) {
      searchWeather(searchKey);
      getWeatherForecast();
      updateMyLocation(false);
      setSearchKey('');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (searchKey) {
      searchWeather(searchKey);
      getWeatherForecast();
      updateMyLocation(false);
      setSearchKey('');
    }
  };

  return (
    <div>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-cursor'>
          <button onClick={(e) => handleClick(e)} className='z-50'>
            <svg
              className='w-4 h-4 text-gray-500 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </button>
        </div>
        <input
          id='default-search'
          className='focus:outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 capitalize placeholder:lowercase'
          placeholder='Search for places...'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />

        {searchKey && (
          <button
            onClick={() => setSearchKey('')}
            className='text-black border-2 absolute end-2.5 bottom-[50%] translate-y-[50%] font-bold rounded-full text-sm w-8 h-8 '
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};
export default SearchCities;
