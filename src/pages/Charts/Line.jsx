import React from 'react'

import { ChartsHeader, LineChart } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Line = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white/50 dark:bg-gray-600/50 backdrop-blur dark:bg-gray-600 rounded-3xl'>
      <ChartsHeader 
        category='Individual'
        title='Power Levels'
      />
      <div className='w-full flex justify-center'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line