import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthliOverview from './MonthliOverview'
import ProductsTable from './ProductsTable'
import OrdersTableview from '../view/OrderTableView'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <div className='shadow-lg shadow-gray-600'>
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>

          <div className='shadow-lg shadow-gray-600'>
            <MonthliOverview />
          </div>

        </Grid>

        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <OrdersTableview />
          </div>
          
        </Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard