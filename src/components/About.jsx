import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#36393B] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-800'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas finibus accumsan.</p>
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et tellus in odio hendrerit vestibulum nec ac sem. Nunc quis orci at erat egestas lobortis. Phasellus augue erat, interdum ac nibh in, tempor tristique eros. Sed tincidunt sagittis consectetur. Nullam est urna, aliquam vitae tempor id, dictum a magna. Nulla at ipsum tempus, vulputate lorem id, blandit enim. Proin auctor ex nunc. Integer id sem eu velit venenatis ornare non sed mauris. Suspendisse velit dui, suscipit ac accumsan id, ornare sit amet mi. Morbi quis pulvinar nibh. Suspendisse potenti. Phasellus mauris tellus, scelerisque et ullamcorper at, euismod vitae leo. Vestibulum feugiat scelerisque arcu, nec ullamcorper nunc. Cras malesuada maximus dolor quis tempus. Fusce mi eros, vestibulum at commodo eget, varius eu dui.
            </p>
          </div>

        </div>
      </div>
      </div>
  )
}

export default About