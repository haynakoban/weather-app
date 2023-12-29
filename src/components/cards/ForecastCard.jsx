import {
  formatToLocalTime,
  iconUrlFromCode,
} from '../../services/weatherService';

const ForecastCard = ({
  title = '02:30 PM | Sun',
  image = 'https://openweathermap.org/img/wn/02d@2x.png',
  degree = 5,
  tz,
  showBothTemperature = false,
}) => {
  return (
    <div className='bg-[#FFFFFF] rounded-xl !w-32 py-3 flex flex-col justify-center items-center cursor-pointer'>
      <p className='font-semibold text-md'>
        {formatToLocalTime(title, tz, 'h:mm A')}
      </p>
      <img
        src={iconUrlFromCode(image)}
        alt='weather icon'
        width={80}
        height={80}
      />
      <div className='flex justify-center'>
        <p className='font-semibold px-1 text-gray-950 text-md'>
          {degree}&#176;
        </p>
        {showBothTemperature && (
          <p className='font-semibold px-1 text-gray-400 text-md'>
            {degree}&#176;
          </p>
        )}
      </div>
    </div>
  );
};
export default ForecastCard;
