import React, { useContext } from 'react'
import Dashbord from '../Dashbord/Dashbord'
import Header from '../Header/Header'
import { Box, Image, Text } from '@chakra-ui/react'
import '../../style.css'
import Dougnout from '../../Chart/Dougnout.jsx'
import AllChart from '../../Chart/AllChart'
import lg from '../../../assets/Overiew/Group 12.png'
import gr from '../../../assets/Overiew/Group 9.png'
import dsh from '../../../assets/Overiew/Group (7).png'
import RadiusChart from '../../Chart/RadiusChart'
import G from '../../../assets/Overiew/Group 14 (1).png'
import Login from '../Login/Login'
import { AuthContext } from '../../Context'


const Wallets = ({ arr }) => {

  let { auth } = useContext(AuthContext)
  let accessToken = auth.accessToken


  return (
    <>
      {
        accessToken !== undefined ? (
          <Box className='wallet' w='100%' h='100vh' display='flex' gap='32px' >
            <Dashbord wllet={'#32395E'} borderW={'2px solid #1288E8'} colorW={'white'} />
            <Box display='flex' flexDirection='column' gap='25px' w='100%'>
              <Header />
              <Box w='98%' h='2px' backgroundColor='#2D317A' />
              <Box display='flex' flexDirection='column' gap='45px' padding='30px'>
                <Box display='flex' flexDirection='column' gap='24px'>
                  <Text color='white' fontSize='20px'>Wallets</Text>
                  <Box display='flex' gap='16px'>
                    <Box w='370px' h='240px' borderRadius='5px' bg='#160D3E' display='flex' gap='25px' alignItems='center'>
                      <Box w='130px' h='130px'>
                        <Dougnout arr={[90, 30, 130]} />
                      </Box>
                      <Box display='flex' flexDirection='column' gap='10px' color='white'>
                        <Box display='flex' gap='20px'>
                          <Text>Ethereum</Text>
                          <Text>{arr[0]}%</Text>
                        </Box>
                        <Box display='flex' gap='20px'>
                          <Text>Bitcoin</Text>
                          <Text>{arr[1]} %</Text>
                        </Box>
                        <Box display='flex' gap='20px'>
                          <Text>Dash</Text>
                          <Text>{arr[2]} %</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box w='370px' h='240px' borderRadius='5px' bg='#281C4E' p='15px'>
                      <Box display='flex' justifyContent='space-between' color='white' h='50px'>
                        <Text>BitCoin</Text>
                        <Box display='flex' gap='15px'>
                          <Box>
                            <Text>5 248 USD</Text>
                            <Text>+2,59%</Text>
                          </Box>
                          <Image src={lg} />
                        </Box>
                      </Box>
                      <Box w='100%' h='166px' overflow='hidden'>
                        <AllChart border={'rgb(100,70,150)'} arr={[165, 59, 180, 81, 156, 55, 60]} />
                      </Box>
                    </Box>
                    <Box w='370px' h='240px' borderRadius='5px' bg='#35307C' p='15px'>
                      <Box display='flex' justifyContent='space-between' color='white' h='50px'>
                        <Text>BitCoin</Text>
                        <Box display='flex' gap='15px'>
                          <Box>
                            <Text>5 248 USD</Text>
                            <Text>+2,59%</Text>
                          </Box>
                          <Image src={gr} />
                        </Box>
                      </Box>
                      <Box w='100%' h='166px' overflow='hidden'>
                        <AllChart border={'rgb(84,84,189)'} arr={[65, 159, 80, 181, 60, 120, 20, 11, 30]} />
                      </Box>
                    </Box>
                    <Box w='370px' h='240px' borderRadius='5px' bg='#305238' p='15px'>
                      <Box display='flex' justifyContent='space-between' color='white' h='50px'>
                        <Text>BitCoin</Text>
                        <Box display='flex' gap='15px'>
                          <Box>
                            <Text>5 248 USD</Text>
                            <Text>+2,59%</Text>
                          </Box>
                          <Image w='45px' h='45px' src={dsh} />
                        </Box>
                      </Box>
                      <Box w='100%' h='166px' overflow='hidden'>
                        <AllChart border={'rgb(0,232,172)'} arr={[11, 70, 10, 50, 3, 120,]} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box display='flex' gap='30px'>
                  <Box w='751px' h='400px' bg='#160D42' borderRadius='5px'>
                    <RadiusChart />
                  </Box>
                  <Box w='751px' h='400px' bg='#110B3A' borderRadius='5px' display='flex' flexDirection='column' p='30px' gap='20px' color='white'>
                    <Text>RECENT TRANSACTIONS</Text>
                    <Box w='100%' h='2px' bg='#1E1A55' />
                    <Box display='flex' flexDirection='column'>
                      <Image w='100%' h='60px' objectFit='cover' src={G} />
                      <Image w='100%' h='60px' objectFit='cover' src={G} />
                      <Image w='100%' h='60px' objectFit='cover' src={G} />
                      <Image w='100%' h='60px' objectFit='cover' src={G} />
                      <Image w='100%' h='60px' objectFit='cover' src={G} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Login />
        )
      }
    </>

  )
}

export default Wallets