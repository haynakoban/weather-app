import { UilTachometerFast } from '@iconscout/react-unicons';
import { analyzePressure } from '../../services/weatherService';

const Pressure = ({ pressure }) => {
  return (
    <>
      <h1 className='text-5xl font-normal flex items-end'>
        {pressure}
        <span className='!text-xl font-normal pl-2'>hPa</span>
      </h1>
      <div className='flex items-center'>
        <UilTachometerFast size={40} className='text-red-800' />
        <span className='!text-lg font-medium pl-2 tracking-wide'>
          {analyzePressure(pressure)}
        </span>
      </div>
    </>
  );
};
export default Pressure;
