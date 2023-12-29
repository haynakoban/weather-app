import { UilEye } from '@iconscout/react-unicons';
import { getVisibilityDescription } from '../../services/weatherService';

const Visibility = ({ visibility }) => {
  return (
    <>
      <h1 className='text-5xl font-normal flex items-end'>
        {(visibility / 1000)?.toFixed(1)}
        <span className='!text-xl font-normal pl-2'>km</span>
      </h1>
      <div className='flex items-center'>
        <UilEye size={40} className='text-green-800' />
        <span className='!text-lg font-medium pl-2 tracking-wide'>
          {getVisibilityDescription(visibility)}
        </span>
      </div>
    </>
  );
};
export default Visibility;
