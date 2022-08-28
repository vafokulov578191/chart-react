import React from 'react'
import Dashbord from './Dashbord'
import Header from './Header'
import { Box, Button, Text } from '@chakra-ui/react'
import './style.css'
import One from './tranz_one_comp/One'

const Transictions = () => {
  return (
    <Box className='wallet' w='100%' h='100vh' display='flex' gap='32px' >
      <Dashbord Trnsictions={'#32395E'} borderT={'2px solid #1288E8'} colorT={'white'} />
      <Box display='flex' flexDirection='column' gap='25px' w='100%'>
        <Header />
        <Box w='99%' h='2px' backgroundColor='#2D317A' />
        <Box display='flex' flexDirection='column' padding='30px' gap='20px'>
          <Box display='flex' flexDirection='column' gap='26px'>
            <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
              <Text color='white' fontSize='20px'>Transictions</Text>
              <Button color='white' w='140px' h='42px' borderRadius='25px' bg='#3887FE'>Export History</Button>
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Box display='flex' gap='10px' color='white'>
                <Text>Total</Text>
                <Text>1,543</Text>
              </Box>
              <Box display='flex' gap='20px'>
                <Button color='white' bg='#32395E' borderBottom='2px solid #1288E8'>All</Button>
                <Button bg='none' color='#616A8B'>Send</Button>
                <Button bg='none' color='#616A8B'>Recent</Button>
              </Box>
            </Box>
          </Box>
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
          <One />
        </Box>
      </Box>
    </Box>
  )
}

export default Transictions