import moment from 'moment';
import { UilArrowCircleUp, UilArrowCircleDown } from '@iconscout/react-unicons';
import {
  formatToLocalTime,
  formatSunriseSunsetStatus,
} from '../../services/weatherService';

const SunriseSunset = ({ sunrise, sunset, timezone }) => {
  return (
    <>
      <div className='flex items-center'>
        <UilArrowCircleUp size={40} className='text-yellow-600' />
        <div className='ml-5'>
          <h1 className='text-xl font-medium tracking-wide'>
            {formatToLocalTime(sunrise, timezone, 'h:mm A')}
          </h1>
          <span className='!text-md font-normal text-gray-400'>
            {formatSunriseSunsetStatus(moment.now(), sunrise)}
          </span>
        </div>
      </div>
      <div className='flex items-center'>
        <UilArrowCircleDown size={40} className='text-yellow-600' />
        <div className='ml-5'>
          <h1 className='text-xl font-medium tracking-wide'>
            {formatToLocalTime(sunset, timezone, 'h:mm A')}
          </h1>
          <span className='!text-md font-normal text-gray-400'>
            {formatSunriseSunsetStatus(moment.now(), sunset)}
          </span>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default SunriseSunset;
