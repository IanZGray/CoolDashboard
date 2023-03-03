import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Friends = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white/50 dark:bg-gray-600/50 backdrop-blur rounded-3xl'>
      <Header
        category='Page'
        title='Friends'
      />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject 
          services={[Page, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  )
}

export default Friends