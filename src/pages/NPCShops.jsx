import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const NPCShops = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white/50 backdrop-blur dark:bg-gray-600/50 rounded-3xl'>
      <Header
        category='Page'
        title='NPC Shops'
      />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ 
          allowDeleting: true, 
          allowEditing: true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))}
        </ColumnsDirective>
        <Inject 
          services={[Page, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  )
}

export default NPCShops