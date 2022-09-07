import React, { useContext } from 'react'
import '../../style.css'
import Dashbord from '../Dashbord/Dashbord'
import Header from '../Header/Header';
import { Box, Button, Text, Image } from '@chakra-ui/react';
import Dougnout from '../../Chart/Dougnout.jsx';
import Linespending from '../../Chart/Linespending';
import Linechart from '../../Chart/Linechart';
import Btc from '../../../assets/Group 13.png'
import Gr from '../../../assets/Group 14.png'
import ef from '../../../assets/Group 13 (1).png'
import aet from '../../../assets/Group 15.png'
import { AuthContext } from '../../Context';
import { motion } from 'framer-motion';


const Overview = () => {
  let { auth } = useContext(AuthContext)
  let accessToken = auth.accessToken
  return (
    <>
      {
        accessToken !== undefined ? (
          <div className='Main'>
            <Dashbord ovee={'#32395E'} borderOv={'2px solid #1288E8'} />
            <Box w='100%' h='100vh' display='flex' flexDirection='column' gap='25px'>
              <motion.div
                style={{ display: 'flex', flexDirection: 'column', gap: '25px', width: '100%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Header />
                <Box w='99%' h='2px' backgroundColor='#2D317A' />
                <Box display='flex' flexDirection='column' gap='25px' p='30px' overflow='hidden'>
                  <Box w='100%' display='flex' justifyContent='space-between'>
                    <Box display='flex' gap='40px' alignItems='center'>
                      <Text color='white' fontSize='18px'>Overview</Text>
                      <Text color='#54669C' fontSize='14px'>25 october, Sunday</Text>
                    </Box>
                    <Button bg='#3887FE' borderRadius='25px' w='135px' h='32px' color='white'>Add widget</Button>
                  </Box>
                  <Box display='flex' gap='16px' alignItems='center' marginTop='10px' w='100%'>
                    <Box display='flex' gap='25px' w='50%'>
                      <Box w='350px' h='342px' bg='#160D40' borderRadius='5px' display='flex' flexDirection='column' alignItems='center'>
                        <Box w='200px' h='150px' zIndex='20' position='relative' padding='16px'>
                          <Text marginBottom='15px' color='white' fontWeight='600'>Balance</Text>
                          <Dougnout />
                          <Box display='flex' justifyContent='space-between' color='white' marginTop='15px'>
                            <Box>
                              <Text>Ethereum</Text>
                              <Text>Bitcoin</Text>
                              <Text>Dash</Text>
                            </Box>

                            <Box>
                              <Text>120 %</Text>
                              <Text>20 %</Text>
                              <Text>60 %</Text>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box w='350px' h='342px' display='flex' flexDirection='column' bg='#160D40' alignItems='center' padding='18px' borderRadius='5px'>
                        <Box display='flex' flexDirection='column' gap='32px' w='95%' marginBottom='8px'>
                          <Box display='flex' justifyContent='space-between'>
                            <Text color='white'>Spending</Text>
                            <select style={{ background: 'none', color: 'white' }}>
                              <option style={{ color: 'black' }}>January</option>
                              <option style={{ color: 'black' }}>February</option>
                              <option style={{ color: 'black' }}>July</option>
                            </select>
                          </Box>
                          <Box display='flex' gap='6px' flexDirection='column' color='white'>
                            <Text fontSize='20px' fontWeight='600'>$ 5,743.35</Text>
                            <Text color='#54669C'>total spending</Text>
                          </Box>
                        </Box>
                        <Box w='300px' h='200px' borderRadius='5px' bg='#190D90'>
                          <Linespending arr={[665, 459, 580, 381, 566, 400, 450, 700]} />
                        </Box>
                      </Box>
                    </Box>
                    <Box display='flex' flexWrap='wrap' gap='25px' maxWidth='50%' minWidth='50%' alignItems='flex-end'>
                      <Box w='fit-content' h='fit-content' bg='#190D90' borderRadius='5px' overflow='hidden' display='flex' alignItems='center'>
                        <Image w='350px' h='157px' objectFit='cover' src={Btc} />
                      </Box>
                      <Box w='350px' h='158px' bg='#190D90' borderRadius='5px' overflow='hidden'>
                        <Image w='350px' h='157px' objectFit='cover' src={Gr} />
                      </Box>
                      <Box w='350px' h='158px' bg='#190D90' borderRadius='5px' overflow='hidden'>
                        <Image w='350px' h='158px' objectFit='cover' src={ef} />
                      </Box>
                      <Box w='350px' h='158px' bg='#190D90' borderRadius='5px' overflow='hidden'>
                        <Image w='350px' h='157px' objectFit='cover' src={aet} />
                      </Box>
                    </Box>
                  </Box>

                  <Box w='100%' display='flex' gap='20px' h='300px'>
                    <Box w='931px' bg='#120C3C' borderRadius='5px' height='300px' padding='16px'>
                      <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Box display='flex' gap='25px'>
                          <Text color='white' fontWeight='600' fontSize='20px'>Market</Text>
                          <select style={{ background: 'none', color: '#54669C', display: 'flex', fontSize: '18px' }}>
                            <option style={{ color: 'black' }}>Bitcoin</option>
                            <option style={{ color: 'black' }}>Ethereum</option>
                            <option style={{ color: 'black' }}>Dash</option>
                          </select>
                        </Box>
                        <select style={{ background: 'none', color: '#54669C', display: 'flex', fontSize: '16px' }}>
                          <option style={{ color: 'black' }}>November</option>
                          <option style={{ color: 'black' }}>February</option>
                          <option style={{ color: 'black' }}>summer</option>
                        </select>
                      </Box>
                      <Box w='100%' h='150px'>
                        <Linechart arr={[65, 59, 80, 81, 56, 55, 40]} w={'869.222px'} h={'276px'} />
                      </Box>
                    </Box>
                    <Box w='553px' bg='#190D90' borderRadius='5px' padding='16px' display='flex' flexDirection='column' gap='16px'>
                      <Box w='100%' display='flex' flexDirection='column' gap='10px'>
                        <Text color='white' fontSize='18px'>Recent News</Text>
                        <Box w='100%' h='1px' bg='#2D317A' fontWeight='600' />
                      </Box>
                      <Box display='flex' flexDirection='column' gap='25px' alignItems='center'>
                        <Box display='flex' gap='25px' alignItems='center' w='100%' h='33px'>
                          <Text color='#54669C' w='100px'>19 hours ago </Text>
                          <Text color='white'>SEC Fails to Show Court Blockvest Tokens Are Securities</Text>
                        </Box>
                        <Box display='flex' gap='25px' alignItems='center' w='100%' h='33px'>
                          <Text color='#54669C' w='160px'>23 hours ago</Text>
                          <Text color='white'>Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits the Global Economy</Text>
                        </Box>
                        <Box display='flex' gap='45px' alignItems='center' w='100%' h='33px'>
                          <Text color='#54669C' w='100px'>11.22  15:27</Text>
                          <Text color='white'>A Look at the Multi-Currency Encrypted Messaging App ‘Chat.Chat’</Text>
                        </Box>
                        <Box display='flex' gap='35px' alignItems='center' w='100%' h='33px'>
                          <Text color='#54669C' w='100px'>11.21  11:43</Text>
                          <Text color='white'>Four Ways To Comememorate Bitcoin's 10th Anniversary</Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </div>
        ) : (
          window.location.href = '/login'
        )
      }
    </>

  )
}

export default Overview