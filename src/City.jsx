import React from 'react';

const City = ({ city }) => {
  // If the city object is not defined
  if (!city) {
    return <div className='mt-4'>Loading...</div>;
  }

  return (
    <div className='mt-4 py-4 px-4 border-2 w-[400px] m-auto shadow-lg'>
      <h1 className='text-4xl mb-2 font-bold'>{city.main && city.main.temp}</h1>
      <h1 className='text-3xl'>{city.name}</h1>
      <h1 className='text-2xl mt-2'>{city.weather && city.weather[0] && city.weather[0].main}</h1>
    </div>
  );
};

export default City;
