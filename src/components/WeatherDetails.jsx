import {
  UilCloudSun,
  UilTemperatureHalf,
  UilLocationPoint,
  UilCelsius,
  UilFahrenheit,
} from '@iconscout/react-unicons';
import city from '../assets/weather.jpg';
import useWeatherStore from '../store/useWeatherStore';
import { formatToLocalTime } from '../services/weatherService';

const bgUrl = {
  background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${city}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const WeatherDetails = () => {
  const {
    w,
    myLocation,
    units,
    getCoordinates,
    getWeatherForecast,
    updateUnits,
  } = useWeatherStore();

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        getCoordinates(lat, lon);
      });
    }
  };

  const handleUpdateUnits = (unit) => {
    updateUnits(unit);
    getWeatherForecast();
  };

  return (
    <div className='pt-6 flex flex-col'>
      <div className='flex justify-center items-center rounded-2xl relative w-full h-[200px] overflow-hidden'>
        <img
          src={`https://openweathermap.org/img/wn/${w?.weather?.[0]?.icon}@2x.png`}
          alt='Weather Icon'
          className='object-cover w-1/2 h-1/2 z-50'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-[#00000050]'></div>
      </div>

      <div className='flex justify-between items-end'>
        <h1 className='pt-6 text-7xl font-extralight flex items-start'>
          {w?.main?.temp?.toFixed()}{' '}
          <span className='!text-5xl font-light pl-2'>&#176;</span>
        </h1>
        <div className='flex justify-end items-center'>
          <UilLocationPoint
            size={28}
            className={`${
              myLocation ? 'text-blue-600' : 'text-gray-600'
            } cursor-pointer`}
            onClick={() => handleGeoLocation()}
          />
          <p className='text-2xl text-gray-700 font-normal mx-4'> |</p>
          <UilCelsius
            size={28}
            className={`${
              units === 'metric' ? 'text-blue-600' : 'text-gray-600'
            } cursor-pointer`}
            onClick={() => handleUpdateUnits('metric')}
          />
          <UilFahrenheit
            size={28}
            className={`${
              units === 'imperial' ? 'text-blue-600' : 'text-gray-600'
            } cursor-pointer`}
            onClick={() => handleUpdateUnits('imperial')}
          />
        </div>
      </div>
      <div className='flex flex-col pt-4'>
        <p className='font-medium tracking-wide'>
          {formatToLocalTime(w?.dt, w?.timezone)}
        </p>
        <p className='text-gray-500 pt-2 font-medium tracking-wide'>
          {formatToLocalTime(w?.dt, w?.timezone, 'h:mm A')}
        </p>
      </div>
      <hr className='w-full h-px my-8 bg-[#20212842] border-0' />
      <div className='flex justify-start items-center gap-3'>
        <UilCloudSun size={30} />
        <p className='font-medium tracking-wider capitalize'>
          {w?.weather?.[0].description}
        </p>
      </div>
      <div className='pt-4 mb-8 flex justify-start items-center gap-3'>
        <UilTemperatureHalf size={30} />
        <p className='font-medium tracking-wider'>
          Feel Like - {w?.main?.feels_like?.toFixed()}
          <span>&#176;</span>
        </p>
      </div>

      <div
        className='relative h-[130px] rounded-2xl tracking-wider'
        style={bgUrl}
      >
        <div
          className='absolute text-center'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1 className='text-white text-xl'>
            {w?.name}, {w?.sys?.country}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
