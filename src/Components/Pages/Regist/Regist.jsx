import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from '../../api/axios'

let LOGIN_URL = '/register'

const Regist = () => {
    let [user, setUser] = useState('')
    let [pwd, setPwd] = useState('')
    let [Post, setPost] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/users');
                setPost(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }

        fetchPosts();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = { user, pwd }
        console.log(newPost);
        try {
            const res = await axios.post(LOGIN_URL, JSON.stringify({ newPost }),
                {
                    headers: { "content-type": "application/json" },
                    withCredentials: true
                })
            const allPosts = [...Post, res.data];
            setPost(allPosts)
            setUser('')
            setPwd('')
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }


    return (
        <Box bg='#110929' w='100%' h='100vh'>
            <form onSubmit={(e) => handleSubmit(e)}
                style={{
                    width: '600px', height: '100%', display: 'flex', flexDirection: 'column', margin: '0px auto', gap: '30px', marginTop: '150px',
                    textAlign: 'center', color: 'white'
                }}>
                <Text>FORM</Text>
                <Input value={user} onChange={(e) => setUser(e.target.value)} placeholder='Name' />
                <Input value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='password' />
                <Input bg='green' color='white' cursor='pointer' type='submit' />
                <Link to={'/login'}>
                    <Button bg='blue' w='100%' color='white'>Войти</Button>
                </Link>
            </form>
        </Box>
    )
}

export default Regist