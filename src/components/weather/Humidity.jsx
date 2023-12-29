import { UilTear } from '@iconscout/react-unicons';
import { formatHumidityText } from '../../services/weatherService';
const Humidity = ({ humidity }) => {
  return (
    <>
      <h1 className='text-5xl font-normal flex items-start'>
        {humidity}
        <span className='!text-xl font-normal pl-2'>%</span>
      </h1>
      <div className='flex items-center'>
        <UilTear size={40} className='text-sky-600' />
        <span className='!text-lg font-medium pl-2 tracking-wide'>
          {formatHumidityText(humidity)}
        </span>
      </div>
    </>
  );
};
export default Humidity;
