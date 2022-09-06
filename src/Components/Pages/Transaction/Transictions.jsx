import React, { useContext } from 'react'
import Dashbord from '../Dashbord/Dashbord'
import Header from '../Header/Header'
import { Box, Button, Text } from '@chakra-ui/react'
import '../../style.css'
import One from '../../tranz_one_comp/One'
import { AuthContext } from '../../Context';
import Login from '../Login/Login';


const Transictions = () => {
  let { auth } = useContext(AuthContext)
  let accessToken = auth.accessToken

  return (
    <>
      {
        accessToken !== undefined ? (
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
                <One back={'#32395E'} text={'Waiting'} />
                <One back={'#F35050'} text={'Error'} />
                <One back={'#32395E'} text={'Waiting'} />
                <One back={'#00E8ACBF'} text={'Completed'} />
                <One back={'#32395E'} text={'Waiting'} />
                <One back={'#32395E'} text={'Waiting'} />
                <One back={'#32395E'} text={'Waiting'} />
              </Box>
            </Box>
          </Box>
        ) : (
          <Login/>
        )
    }
    </>

  )
}

export default Transictions