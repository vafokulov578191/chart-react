import React from 'react'
import { Link as Side } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/react'
import '../../style.css'
import logo from '../../../assets/valuet.png'
import overview from '../../../assets/ovevier.png'
import wallets from '../../../assets/wallet.png'
import Exchange from '../../../assets/tranacton.png'
import Transictions from '../../../assets/trans.png'
import market from '../../../assets/market.png'
import log_out from '../../../assets/Group (5).png'
import elisp from '../../../assets/Ellipse (3).png'
import Poly from '../../../assets/Polygon.png'


const Dashbord = ({Overview, borderOv, wllet, borderW, colorW, Trnsictions, borderT, colorT, exchange, borderE, colorE, markeT, borderM, colorM}) => {
    return (
        <Box className='bar' w='320px' h='100vh' padding='25px' display='flex' alignItems='center' flexDirection='column' justifyContent='space-between'>
            <Box display='flex' flexDirection='column' gap='40px' alignItems='center'>
                <Box>
                    <Image w='120px' h='50px' objectFit='cover' src={logo} />
                    <Box w='120px' h='2px' backgroundColor='#1288E8' position='relative' bottom='10px' />
                </Box>
                <Box display='flex' flexDirection='column' gap='25px'>
                    <Box w='200px' h='50px' bg={Overview} display='flex' alignItems='center' padding='15px' borderRadius='5px' cursor='pointer' borderBottom={borderOv}>
                        <Side to='/overview' style={{ display: 'flex', gap: '15px', color: 'white', alignItems: 'center' }}>
                            <Image w='16px' h='16px' src={overview} />
                            <Text>Overview</Text>
                        </Side>
                    </Box>

                    <Box w='200px' h='50px' display='flex' alignItems='center' padding='12px' cursor='pointer' bg={wllet} borderBottom={borderW}  >
                        <Side to='/wallets' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <Image src={wallets} />
                            <Text color={colorW} >Wallets</Text>
                        </Side>
                    </Box>

                    <Box w='200px' h='50px' display='flex' alignItems='center' padding='12px' cursor='pointer' bg={Trnsictions} borderBottom={borderT}>
                        <Side to='/transictions' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <Image src={Transictions} />
                            <Text color={colorT}>Transictions</Text>
                        </Side>
                    </Box>

                    <Image src={Poly} w='65px' h='65px' top='514px' right='-24px' position='absolute' />

                    <Box w='200px' h='50px' display='flex' alignItems='center' padding='12px' cursor='pointer' bg={exchange} borderBottom={borderE}>
                        <Side to='/exchange' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <Image src={Exchange} />
                            <Text color={colorE}>Exchange</Text>
                        </Side>
                    </Box>

                    <Box w='200px' h='50px' display='flex' alignItems='center' padding='12px' cursor='pointer' bg={markeT} borderBottom={borderM}>
                        <Side to='/market' style={{ display: 'flex', gap: '16px', color: '#616A8B', alignItems: 'center' }}>
                            <Image src={market} />
                            <Text color={colorM}>market</Text>
                        </Side>
                    </Box>

                </Box>
            </Box>


            <Box display='flex' flexDirection='column' gap='25px' alignItems='start'>
                <Box w='180px' h='2px' bg='#018FFF' />
                <Box display='flex' flexDirection='column' gap='23px'>
                    <Box color='#616A8B' display='flex' gap='15px' alignItems='center' cursor='pointer'>
                        <Image src={elisp} />
                        <Text>Mike Jakson</Text>
                    </Box>
                    <Side to='/Login' style={{display: 'flex', gap: '17px', alignItems: 'center', color: '#616A8B', cursor: 'pointer'}}>
                        <Image src={log_out} />
                        <Text>Log out</Text>
                    </Side>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashbord