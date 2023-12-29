import useWeatherStore from '../store/useWeatherStore';

// components
import ForecastCard from './cards/ForecastCard';
import WeatherCard from './cards/WeatherCard';
import Temperature from './weather/Temperature';
import WindStatus from './weather/WindStatus';
import SunriseSunset from './weather/SunriseSunset';
import Humidity from './weather/Humidity';
import Visibility from './weather/Visibility';
import Pressure from './weather/Pressure';

const WeeklyBroadcast = () => {
  const { w, f } = useWeatherStore();

  const weather_details_1 = [
    {
      title: 'Temperature',
      component: (
        <Temperature
          temp_min={w?.main?.temp_min}
          temp_max={w?.main?.temp_max}
        />
      ),
    },
    {
      title: 'Wind Status',
      component: (
        <WindStatus windSpeed={w?.wind?.speed} windDir={w?.wind?.deg} />
      ),
    },
    {
      title: 'Sunrise & Sunset',
      component: (
        <SunriseSunset
          sunrise={w?.sys?.sunrise}
          sunset={w?.sys?.sunset}
          timezone={w?.timezone}
        />
      ),
    },
  ];

  const weather_details_2 = [
    {
      title: 'Humidity',
      component: <Humidity humidity={w?.main?.humidity} />,
    },
    {
      title: 'Visibility',
      component: <Visibility visibility={w?.visibility} />,
    },
    {
      title: 'Pressure',
      component: <Pressure pressure={w?.main?.pressure} />,
    },
  ];

  return (
    <div className='container mx-auto'>
      <>
        <h2 className='text-lg font-medium tracking-wide mb-4 uppercase'>
          Today
        </h2>
        <div className='flex justify-center lg:justify-start flex-wrap gap-3'>
          {weather_details_1.map((detail) => {
            return (
              <WeatherCard key={detail.title} title={detail.title}>
                {detail.component}
              </WeatherCard>
            );
          })}
        </div>
        <div className='mt-3 flex justify-center lg:justify-start flex-wrap gap-3'>
          {weather_details_2.map((detail) => {
            return (
              <WeatherCard key={detail.title} title={detail.title}>
                {detail.component}
              </WeatherCard>
            );
          })}
        </div>
      </>
      <>
        <h2 className='mt-16 text-lg font-medium tracking-wide mb-4 uppercase'>
          Hourly Forecast
        </h2>
        <div className='flex justify-center lg:justify-start flex-wrap gap-3'>
          {f?.list?.map((l, index) => {
            return (
              <ForecastCard
                key={index}
                title={l?.dt}
                image={l?.weather?.[0]?.icon}
                degree={l?.main?.temp}
                tz={w?.timezone}
              />
            );
          })}
        </div>
      </>
      {/* <h2 className='mt-16 text-lg font-medium tracking-wide mb-4 uppercase'>
        Daily Forecast
      </h2>
      <div className='flex justify-center lg:justify-start flex-wrap gap-3'>
        {[0, 1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <ForecastCard
              key={index}
              title='Mon'
              image='https://openweathermap.org/img/wn/02d@2x.png'
              degree={5}
              showBothTemperature={true}
            />
          );
        })}
      </div> */}
    </div>
  );
};
export default WeeklyBroadcast;
