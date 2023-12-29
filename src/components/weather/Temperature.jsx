import { UilTemperatureEmpty, UilTemperature } from '@iconscout/react-unicons';

const Temperature = ({ temp_min, temp_max }) => {
  return (
    <>
      <div className='flex items-center'>
        <UilTemperatureEmpty size={40} className='text-orange-700' />
        <div className='ml-5'>
          <h1 className='text-5xl font-normal flex items-start'>
            {temp_min}
            <span className='!text-2xl font-normal pl-2'>&#176;</span>
          </h1>
        </div>
      </div>
      <div className='flex items-center'>
        <UilTemperature size={40} className='text-orange-700' />
        <div className='ml-5'>
          <h1 className='text-5xl font-normal flex items-start'>
            {temp_max}
            <span className='!text-2xl font-normal pl-2'>&#176;</span>
          </h1>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default Temperature;
