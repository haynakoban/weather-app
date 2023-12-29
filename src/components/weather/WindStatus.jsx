import { UilCompass } from '@iconscout/react-unicons';
import { getWindDirection } from '../../services/weatherService';

const WindStatus = ({ windSpeed, windDir }) => {
  return (
    <>
      <h1 className='text-5xl font-normal flex items-end'>
        {windSpeed?.toFixed(1)}
        <span className='!text-xl font-normal pl-2'>km/h</span>
      </h1>
      <div className='flex items-center'>
        <UilCompass size={40} className='text-fuchsia-600' />
        <span className='!text-lg font-medium pl-2 tracking-wide'>
          {getWindDirection(windDir)}
        </span>
      </div>
    </>
  );
};
export default WindStatus;
