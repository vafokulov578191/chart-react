import React from 'react'
import '../style.css'
import { Box, Button, Text, Image } from '@chakra-ui/react'
import btcimg from '../../assets/Overiew/Vector (4).png'
import left from '../../assets/Overiew/Group 13.2.png'


const One = () => {
    return (
        <Box className='trn' w='100%' h='70px' display='flex' padding='24px' alignItems='center' justifyContent='space-between' borderRadius='8px'>
            <Box display='flex' gap='33px' color='white' fontSize='16px' fontWeight='600'>
                <Text>AM 01:16</Text>
                <Text>24 dec 2018</Text>
                <Box w='32px' h='32px' display='flex' alignItems='center' justifyContent='center' borderRadius='100%' border='2px solid #1190F2'>
                    <Image objectFit='contain' src={btcimg} />
                </Box>
            </Box>
            <Box display='flex' gap='25px' alignItems='center'>
                <Image src={left} h='21px' />
                <Text color='white'>74EKRJMXkhKDR5dj34578fgirwE22sfg</Text>
            </Box>
            <Box display='flex' gap='30px' alignItems='center'>
                <Text fontSize='16px' color='white'>0.0085 BTC</Text>
                <Button bg='#32395E' w='90px' h='30px' borderRadius='5px' color='white'>Waiting</Button>
            </Box>
        </Box>
    )
}

export default One