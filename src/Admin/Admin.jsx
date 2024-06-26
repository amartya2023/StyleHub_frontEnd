import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import QueueIcon from '@mui/icons-material/Queue';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';


const menu = [
    {name: "Dashboard", path: "/admin", icon: <DashboardIcon/>},
    {name: "Products", path: "/admin/products", icon: <CategoryIcon/>},
    {name: "Customers", path: "/admin/customers", icon: <PeopleIcon/>},
    {name: "Orders", path: "/admin/orders", icon: <FlipToFrontIcon/>},
    {name: "AddProduct", path: "/admin/product/create", icon: <QueueIcon/>},
    // {name: "", path: " "},
]

const Admin = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <>
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item,index) => <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>
      </>
      

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    

      <div className='relative flex h-[100vh]'>
        <CssBaseline/>

        <div className='w-[15%] border border-r-gray-300 h-full fixed top-0'>
          {drawer}
        </div>

        <div className='w-[85%] h-full ml-[15%]'>

          <Routes>

            <Route path='/' element={<AdminDashboard />} />
            <Route path='/product/create' element={<CreateProductForm />} />
            <Route path='/products' element={<ProductsTable />} />
            <Route path='/orders' element={<OrdersTable />} />
            <Route path='/customers' element={<CustomersTable />} />

          </Routes>

        </div>

      </div>
      
  )
}

export default Admin