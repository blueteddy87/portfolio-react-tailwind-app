import React from 'react'
import WorkImg from '../assets/norway.png'
import realEstate from '../assets/weather.png'
import blazor from '../assets/blazor_pr.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#36393B]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-800' >
            Work
          </p>
          <p className='py-6'>Inne projekty...</p>
        </div>

        {/* container for projects */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
         
        {/* grid item */}
          <div 
          style={{ backgroundImage: `url(${realEstate})` }}
          className='shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS App

              </span>
              <div className='pt-8 text-center'>
                <a href="https://weatherareact.firebaseapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/blueteddy87/weather-app.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{ backgroundImage: `url(${WorkImg})` }}
          className='shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                HTML CSS App

              </span>
              <div className='pt-8 text-center'>
                <a href="https://reactzal.firebaseapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div 
          style={{ backgroundImage: `url(${blazor})` }}
          className='shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blazor App

              </span>
              <div className='pt-8 text-center'>
                <a href="https://brave-sand-06168b003.2.azurestaticapps.net/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/blueteddy87/Blazor.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work