import React from 'react'
import { Box, Input, Button, Image, Text } from '@chakra-ui/react'
import lgbtc from '../../assets/Overiew/Group 6 (3).png'
import efr from '../../assets/Overiew/Vector (5).png'
import logo from '../../assets/Overiew/Group 4.png'
import logo1 from '../../assets/Overiew/Group 3 (1).png'
import arrow from '../../assets/Arrow.png'


const Currencyin = (props) => {

    return (
        <Box display='flex' flexDirection='column' gap='26px' alignItems='center'>
            <Box display='flex' gap='25px'>
                <Box display='flex' w='760px' bg='#160D3E' h='250px' borderRadius='5px' p='30px' flexDirection='column' gap='15px'>
                    <Box display='flex' justifyContent='space-between'>
                        <select defaultValue={props.currency1} onChange={(e) => props.onChangeCurrency(e.target.value)} style={{ width: '100px', height: '33px', background: 'none', color: 'white' }}>
                            {props.arr.map((item, index) => <option style={{ color: 'black' }} value={item} key={index}>{item}</option>)}
                        </select>
                        <Image src={lgbtc} />
                    </Box>
                    <Input margin='0px auto' w='100%' h='46px' bg='#32395E' borderRadius='5px' color='white' value={props.amount} onChange={(e) => props.onChangeAmount(e.target.value)} />
                </Box>
                <Box w='760px' bg='#160D3E' h='250px' borderRadius='5px' p='30px' display='flex' flexDirection='column' gap='15px'>
                    <Box display='flex' justifyContent='space-between' h='110px'>
                        <select defaultValue={props.currency2} onChange={(e) => props.onChangeCurrency2(e.target.value)} style={{ width: '100px', height: '33px', background: 'none', color: 'white' }}>
                            {props.arr.map((item, index) => <option style={{ color: 'black' }} value={item} key={index}>{item}</option>)}
                        </select>
                        <Image objectFit='contain' src={efr} />
                    </Box>
                    <Input margin='0px auto' w='100%' h='46px' bg='#32395E' borderRadius='5px' color='white' value={props.amount2} onChange={(e) => props.onChangeAmount2(e.target.value)} />
                </Box>

            </Box>
            <Box w='1550px' h='130px' bg='#160D3E' borderRadius='5px' display='flex' alignItems='center' justifyContent='center' gap='35px'>
                <Box display='flex' gap='20px' color='white' alignItems='center'>
                    <Text>0.45234 BTC</Text>
                    <Image src={logo} />
                </Box>
                <Image src={arrow} />
                <Box display='flex' gap='20px' color='white' alignItems='center'>
                    <Image src={logo1} />
                    <Text>1.45534 gRC</Text>
                </Box>
            </Box>
            <Button w='140px' h='42px' bg='#1288E8' color='white' fontSize='18px'>Exchange</Button>
        </Box>
    )
}

export default Currencyin