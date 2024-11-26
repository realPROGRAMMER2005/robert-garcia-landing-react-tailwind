import React from 'react';
import { capitalize } from '../../utils/capitalize';

const ProjectInformation = ({ information }) => {
  const keys = Object.keys(information);

  return (
    <div>
      <div className='font-manrope uppercase my-3 text-[0.8rem] font-semibold'>PROJECT INFO</div>
      <hr className='border-[gray] border-[1px] '/>

      <div>
        {keys.map((key) => (
          <div>
            <div className='flex justify-between my-3' key={key}>
              <div className='text-[0.8rem] font-medium'>{capitalize(key)}</div>
              <div className='text-[0.8rem] text-gray-300 font-medium'>{information[key]}</div>
            </div>
            <hr className='border-[gray] border-[1px] '/>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ProjectInformation;