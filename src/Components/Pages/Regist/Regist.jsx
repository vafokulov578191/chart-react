import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const Regist = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('')

    console.log(data);

    return (
        <Box bg='#110929' w='100%' h='100vh'>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
                style={{
                    width: '600px', height: '100%', display: 'flex', flexDirection: 'column', margin: '0px auto', gap: '30px', marginTop: '50px',
                    textAlign: 'center', color: 'white'
                }}>
                <Text>FORM</Text>
                <Input {...register('Name')} placeholder='Name' />
                <Input {...register('Surname')} placeholder='Surname' />
                <Input {...register('Age')} placeholder='Age' type={'number'} />
                <Input {...register('Email')} placeholder='Email' />
                <Input bg='green' color='white' cursor='pointer' type='submit' />
                <Link to={'/login'}>
                    <Button bg='blue' w='100%' color='white'>Войти</Button>
                </Link>
            </form>
        </Box>
    )
}

export default Regist