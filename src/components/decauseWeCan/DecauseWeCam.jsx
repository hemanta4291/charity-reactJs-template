import React from 'react'
import decauseImg from '../../assets/images/decause-we-can.jpeg'
import CharityLoveImg from '../../assets/images/Charity-Love.png'
import DollarDonateImg from '../../assets/images/Dollar-Donate.png'
import DonateLoveImg from '../../assets/images/Donate-Love.png'
import DonateImg from '../../assets/images/Donate.png'

const DecauseWeCam = () => {
  return (
    <div className={`pb-12 sm:pb-20 relative`}>
      <div className='container mx-auto px-4 pt-24'>
        <div className={`grid grid-cols-1 lg:grid-cols-2`}>
          <div>
            <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>BECAUSE WE CAN</h4>
            <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>How Can We Help Them?</h2>
            <p className='leading-7 font-normal text-lg text-gray-800 m-0 break-words'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </p>
            <div className='grid text-center sm:text-left grid-cols-1 sm:grid-cols-2 lg:gap-10 gap-5 pt-14' >
              <div className='text-center'>
                <img className='w-20 md:w-auto inline-block' src={CharityLoveImg} alt="title" />
                <h5 className='pt-4 text-black font-bold text-lg sm:text-2xl'>Giving Love</h5>
                <p className='leading-7 font-normal text-lg text-black m-0 break-words'>
                  We aim to provide groceries, and appliances to low income familes.
                </p>
              </div>
              <div className='text-center'>
                <img className='w-20 md:w-auto inline-block' src={DollarDonateImg} alt="title" />
                <h5 className='pt-4 text-black font-bold text-lg sm:text-2xl'>Donations</h5>
                <p className='leading-7 font-normal text-lg text-black m-0 break-words'>
                  We aim to provide groceries, and appliances to low income familes.
                </p>
              </div>
              <div className='text-center'>
                <img className='w-20 md:w-auto inline-block' src={DonateLoveImg} alt="title" />
                <h5 className='pt-4 text-black font-bold text-lg sm:text-2xl'>Volunteering</h5>
                <p className='leading-7 font-normal text-lg text-black m-0 break-words'>
                  We aim to provide groceries, and appliances to low income familes.
                </p>
              </div>
              <div className='text-center'>
                <img className='w-20 md:w-auto inline-block' src={DonateImg} alt="title" />
                <h5 className='pt-4 text-black font-bold text-lg sm:text-2xl'>Globalization Work</h5>
                <p className='leading-7 font-normal text-lg text-black m-0 break-words'>
                  We aim to provide groceries, and appliances to low income familes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=' lg:absolute h-full top-0 left-1/2 lg:ml-10 mt-10 lg:mt-0 mx-auto  lg:px-0 lg:pb-24  px-5'>
        <img className='rounded-bl-100 object-cover lg:h-full' src={decauseImg} alt="decause" />
      </div>
    </div>
  )
}

export default DecauseWeCam