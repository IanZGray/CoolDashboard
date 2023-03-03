import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChartsHeader } from '../../components'

const Bar = () => {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white/50 dark:bg-gray-600/50 backdrop-blur dark:bg-gray-600 rounded-3xl'>
      
      <ChartsHeader 
        category='Interpersonal'
        title='Guild Resources Gathered'
      />
      <div className='w-full flex justify-center'>
        <ChartComponent
          id='bar-chart'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartBar={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#acacac' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject 
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => 
              <SeriesDirective 
                key={index} {...item}
              />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>

    </div>
    
  )
}

export default Bar