import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Adventuring = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='mt-12' >
      <section className='flex flex-wrap lg:flex-nowrap justify-center'>
        <header className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-[url("https://getwallpapers.com/wallpaper/full/4/4/0/1383918-cool-space-backgrounds-2880x1800-download.jpg")] bg-no-repeat bg-cover bg-center ' >
          <div className='flex justify-between items-center' >
            <div>
              <p
                className='font-bold text-gray-400'
              >Experience Points</p>
              <p
                className='text-2xl text-teal-300 font-semibold'
              >63,448</p>
            </div>
          </div>
          <div
            className='mt-6'
          >
            <Button 
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </header>
        <article
          className='flex m-3 flex-wrap justify-center gap-1 items-center'
        >
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white/40 backdrop-blur dark:text-gray-500 dark:bg-secondary-dark md:2-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span
                  className={`text-sm text-${item.pcColor} ml-2`}
                >
                  {item.percentage}
                </span>
              </p>
              <p
                className='text-sm text-gray-700 mt-1'
              >
                {item.title}
              </p>
            </div>
          ))}
        </article>
      </section>

      <section className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg/40 backdrop-blur m-3 p-4 rounded-2xl md:w-780 '>
              <header className='flex justify-between'>
                <p className='font-semibold text-xl'>Revenue Updates</p>
                <div className='flex items-center gap-4'>
                  <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                    <span>
                      <GoPrimitiveDot />
                    </span>
                    <span>
                      From Rides
                    </span>
                  </p>
                  <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                    <span>
                      <GoPrimitiveDot />
                    </span>
                    <span>
                      In App
                    </span>
                  </p>
                </div>
              </header>
              <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                <div className='border-r-1 border-color m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>1,150</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                    </p>
                    <p className='text-gray-500 mt-1'>
                      Current Points
                    </p>
                  </div>
                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold'>3,850</span>
                    </p>
                    <p className='text-gray-500 mt-1'>
                      Points To Next Level
                    </p>
                  </div>
                  <div className='mt-5'>
                    <SparkLine 
                      currentColor={currentColor}
                      id='line-sparkline'
                      type='Line'
                      height='80px'
                      width='250px'
                      data={SparklineAreaData}
                      color={currentColor}
                    />
                  </div>
                  <div className='mt-10'>
                    <Button 
                      color='white'
                      bgColor={currentColor}
                      text='Download Report'
                      borderRadius='10px'
                    />
                  </div>

                </div>
                <div>
                  <Stacked 
                    width='320px'
                    height='360px'
                  />
                </div>
              </div>
            </div>
      </section>

    </div>
  )
}

export default Adventuring