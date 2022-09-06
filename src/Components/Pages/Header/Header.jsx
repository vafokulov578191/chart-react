import React from 'react'
import { Box, Input, Image } from '@chakra-ui/react'
import ser from '../../../assets/Overiew/Vector (3).png'
import masse from '../../../assets/Overiew/Group 3.png'
import bud from '../../../assets/Overiew/Group (6).png'


const Header = () => {
    return (
        <Box padding='32px' w='100%' h='65px'>
            <Box w='100%' h='32px' display='flex' justifyContent='space-between' alignItems='center'>
                <Box display='flex' position='relative'>
                    <Input color='white' w='300px' h='32px' borderRadius='25px' bg='#161245' border='none' />
                    <Image src={ser} w='17px' h='17px' position='absolute' right='19px' top='9px' zIndex='111' />
                </Box>
                <Box w='120px' h='32px' display='flex' alignItems='center' gap='40px' overflow='hidden'>
                    <Image src={masse} />
                    <Image src={bud} w='31px' h='60px' objectFit='cover' marginTop='12px' />
                </Box>
            </Box>
        </Box>
    )
}

export default Header