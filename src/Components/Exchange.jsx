import React, { useState, useEffect } from 'react'
import Dashbord from './Dashbord'
import Header from './Header'
import { Box, Text } from '@chakra-ui/react'
import './style.css'
import Currencyin from './Currency_input/Currencyin'
import axios from 'axios'

const Exchange = () => {
  let [currency1, setCurrency1] = useState('USD')
  let [currency2, setCurrency2] = useState('UZS')
  let [amount1, setAmount1] = useState()
  let [amount2, setAmount2] = useState()
  let [arr, setarr] = useState([])

  // useEffect(() => {
  //   axios.get('https://cdn.cur.su/api/latest.json')
  //     .then(res => {
  //       if (res.status === 200 || res.status === 201) {
  //         setarr(res.data.rates)
  //       }
  //     })
  // }, [])


  function handleChangeAmount1(amount1) {
    setAmount2(amount1 * arr[currency2] / arr[currency1]);
    setAmount1(amount1);
  }
  function handleChangeCurrency1(currency1) {
    setAmount2(amount1 * arr[currency2] / arr[currency1]);
    setCurrency1(currency1);
  }

  function handleChangeAmount2(amount2) {
    setAmount1(amount2 * arr[currency1] / arr[currency2]);
    setAmount2(amount2);
  }
  function handleChangeCurrency2(currency2) {
    setAmount2(amount2 * arr[currency1] / arr[currency2]);
    setCurrency2(currency2);
  }

  return (
    <Box className='wallet' w='100%' h='100vh' display='flex' gap='32px' >
      <Dashbord exchange={'#32395E'} borderE={'2px solid #1288E8'} colorE={'white'} />
      <Box display='flex' flexDirection='column' gap='25px' w='100%'>
        <Header />
        <Box w='99%' h='2px' backgroundColor='#2D317A' />
        <Box w='100%' display='flex' flexDirection='column' gap='25px' padding='30px'>
          <Box display='flex' flexDirection='column' color='white' gap='15px'>
            <Text fontSize='19px' fontWeight='600'>Exchange</Text>
            <Box display='flex' justifyContent='space-between' alignItems='center' color='#616A8B' w='550px' fontSize='16px'>
              <Text>From</Text>
              <Text>To</Text>
            </Box>
          </Box>
          <Currencyin
            onChangeAmount={handleChangeAmount1}
            onChangeAmount2={handleChangeAmount2}
            onChangeCurrency={handleChangeCurrency1}
            onChangeCurrency2={handleChangeCurrency2}
            amount={amount1}
            amount2={amount2}
            currency1={currency1}
            currency2={currency2}
            arr={Object.keys(arr)}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Exchange