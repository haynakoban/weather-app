import { useEffect } from 'react';
import SearchCities from './components/SearchCities';
import WeatherDetails from './components/WeatherDetails';
import WeeklyBroadcast from './components/WeeklyBroadcast';
import useWeatherStore from './store/useWeatherStore';

function App() {
  const { getWeatherForecast } = useWeatherStore();

  useEffect(() => {
    getWeatherForecast();
  }, [getWeatherForecast]);

  return (
    <div className='bg-[#F2F2F2] flex lg:block flex-col lg:flex-row justify-center'>
      <div className='pt-5 lg:pt-8 w-full lg:w-96 h-auto lg:h-[100vh] bg-[#F2F2F2] lg:bg-[#FFFFFF] px-8 relative lg:fixed'>
        <SearchCities />
        <WeatherDetails />

        <hr className='block lg:hidden mt-12 mb-4 w-full h-px  bg-[#20212842] border-0' />
      </div>

      <div className='ml-0 lg:ml-96 flex-grow pt-5 lg:pt-8 px-8 lg:px-16 bg-[#F2F2F2]'>
        <WeeklyBroadcast />
      </div>
    </div>
  );
}

export default App;
