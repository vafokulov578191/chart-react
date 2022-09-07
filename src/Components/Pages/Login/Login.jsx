import React, { useContext, useState } from 'react'
import { Box, Input, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../../style.css'
import bg from '../../../assets/Bg.png'
import left from '../../../assets/Group 8.png'
import ab from '../../../assets/Polygon 2.png'
import el from '../../../assets/Rectangle 8.png'
import axios from '../../api/axios'
import { AuthContext } from '../../Context'
import Overview from '../Overview/Overview'
const LOGIN_URL = '/auth'

const Login = () => {

  let { setAuth } = useContext(AuthContext)
  let [user, setUser] = useState('')
  let [pwd, setPwd] = useState('')
  let [errMsg, setErrMsg] = useState('')
  let [success, setSuccess] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
        {
          headers: { "content-type": "application/json" },
          withCredentials: true
        })

      const accessToken = res?.data.accessToken
      const roles = res?.data?.roles

      setAuth({ user, pwd, roles, accessToken })
      setUser('')
      setPwd('')
      setSuccess(true)

    } catch (err) {
      if (!err.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login falid')
      }
    }
  }


  return (
    <Box w='100%' h='100vh' bg="#110929" display='flex' alignItems='center' justifyContent='center'>
      {
        success ? (
          <>
            <Overview />
          </>
        ) : (
          <Box display='flex' justifyContent='space-around' zIndex='1111' p='70px' bgRepeat='no-repeat' w='1366px' h='768px' bg={`url(${bg})`} borderRadius='12px' bgPosition='center' bgSize='cover' overflow='hidden'>
            <Box className='top_header_block' zIndex='12112' position={'relative'} w='480px' h='595px' p='50px' display='flex' alignItems='center' color='white' flexDirection='column' gap='62px'>
              <h1 className='h1'>Welcome!</h1>
              <Box display='flex' flexDirection='column'>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} onSubmit={(e) => handleSubmit(e)}>
                  <p style={{ color: 'red', fontSize: '20px' }}>{errMsg}</p>
                  <Input value={user} onChange={(e) => setUser(e.target.value)} className='input' paddingLeft='48px' background='#2E3558' border='none' w='375px' placeholder='E-mail or Login' h='50px' />
                  <Input value={pwd} onChange={(e) => setPwd(e.target.value)} className='input' paddingLeft='48px' background='#2E3558' border='none' w='375px' h='50px' placeholder='Password' />
                  <Image src={ab} w='67px' h='67px' position='absolute' left='-29px' top='90px' />
                  <Image src={el} w='60px' h='60px' position='absolute' zIndex='10' right='-36px' top='4px' />
                  <Button bg='#2F3453' type='submit'>SING UP</Button>
                </form>
                <Box display='flex' gap='30px' alignItems='center' justifyContent='center' marginTop='25px'>
                  <Link to={'/Regist'}>
                    <Button bg='#3BA0FF' w='375px' h='40px'>SIGN IN</Button>
                  </Link>
                </Box>
                <Box marginTop='80px' textAlign='center' color='#5FB2FF'>
                  <span className='pon'>Forgot your password?</span>
                </Box>
              </Box>
            </Box>
            <Box w='480px' h='595px' borderRadius='12px' display='flex' alignItems='center' justifyContent='center'>
              <Image src={left} />
            </Box>
          </Box>
        )
      }
    </Box>
  )
}

export default Login