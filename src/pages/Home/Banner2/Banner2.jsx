import React from 'react';
import banner from '../../../assets/home/chef-service.jpg';

const Banner2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px', // Set the height to display the background
        display: 'flex', // Enable Flexbox
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
      }}
    >
      <div className='bg-white text-center w-3/4 px-10  py-20 '>
        <h3 className='text-3xl'>BISTRO BOSS</h3>
        <p className='text-xl w-4/5 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt architecto. Totam officia magni libero, laboriosam nulla quae ad illo quisquam excepturi? Aspernatur non eius iure. Asperiores laudantium omnis doloribus!
        </p>
      </div>
    </div>
  );
};

export default Banner2;
