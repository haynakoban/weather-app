const WeatherCard = ({ title = 'UV Index', children }) => {
  return (
    <div className='bg-[#FFFFFF] rounded-xl !w-80 !h-[216px] flex flex-col justify-between items-start cursor-pointer p-6'>
      <p className='font-semibold text-md text-gray-400'>{title}</p>

      {children}
    </div>
  );
};

export default WeatherCard;
