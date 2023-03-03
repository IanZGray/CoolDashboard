import React from 'react'

const ChartsHeader = ({ category, title }) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400 dark:text-white'>
        {category}
      </p>
      <h1 className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-blue-200'>
        {title}
      </h1>
    </div>
  )
}

export default ChartsHeader