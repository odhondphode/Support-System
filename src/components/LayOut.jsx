import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerAppBar from '../components/DrawerAppBar'
export default function LayOut() {
  return (
    <>
      <Box
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        flexDirection={'column'}
       
      >
        <DrawerAppBar/>
        <Box height={'calc(100vh - 120px)'} width={'99%'} flexGrow={1}>
          <Outlet />
        </Box>

      </Box>
    </>
  )
}
