import React, { useContext } from 'react'
import Dashbord from '../Dashbord/Dashbord'
import Header from '../Header/Header'
import { Box, Image, Text } from '@chakra-ui/react'
import '../../style.css'
import lg from '../../../assets/Overiew/Group 10.png'
import la from '../../../assets/Overiew/Group 10 (1).png'
import logo from '../../../assets/Overiew/Group 9.2.png'
import logo1 from '../../../assets/Overiew/Group 10.1 (1).png'
import { AuthContext } from '../../Context';


const Market = () => {
  let { auth } = useContext(AuthContext)
  let accessToken = auth.accessToken
  return (
    <>
      {
        accessToken !== undefined ? (
          <Box className='wallet' w='100%' h='100vh' display='flex' gap='32px' >
            <Dashbord markeT={'#32395E'} borderM={'2px solid #1288E8'} colorM={'white'} />
            <Box display='flex' flexDirection='column' gap='25px' w='100%'>
              <Header />
              <Box w='99%' h='2px' backgroundColor='#2D317A' />
              <Box w='100%' display='flex' flexDirection='column' gap='20px'>
                <Text color='white' fontSize='20px'>Market</Text>
                <Box w='100%' display='flex' flexWrap='wrap' p='30px' gap='35px'>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={lg} />
                    <Image src={logo1} position='relative' bottom='123px' left='24px' />
                  </Box>
                  <Box w='350px' h='190px' padding='15px' bg='#140D3E' borderRadius='5px' position='relative'>
                    <Image src={la} />
                    <Image src={logo} position='relative' bottom='131px' left='33px' />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          window.location.href = '/login'
        )
    }
    </>

  )
}

export default Market