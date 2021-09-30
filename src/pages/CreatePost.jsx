import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'

const Container = styled.div`
    margin-top: 6rem;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
`

const Content = styled.div`
    margin-top: 80px;
    margin-left: 4.5rem;

    @media (max-width: 768px) {
        margin-top: 40px;
        margin-left: 3rem;
    }
`

const Input = styled.input`
    appearance: none;
    outline: none;
    width: 100%;
    border: 2px solid #FFDE7D;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-family: "Poppins";
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
`

const Textarea = styled.textarea`
    margin-top: 2rem;
    appearance: none;
    outline: none;
    width: 100%;
    border: 2px solid #FFDE7D;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-family: "Poppins";
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
`

const Button = styled.button`
    margin-top: 2rem;
    appearance: none;
    outline: none;
    background-color: #FFDE7D;
    border: 2px solid #FFDE7D;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-family: "Poppins";
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    width: min(100%, 20ch);

    &:hover {
        background-color: #e0b021;
        border-color: #e0b021;
        color: white;
    }
`

function CreatePost() {
    let history = useHistory()
    const [input, setInput] = useState({})

    const handleInputChange = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        fetch('http://localhost:4000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then(res => {
            if (res.ok) {
                history.push('/')
            } else {
                alert('Cannot create a post')
            }
        })
    }

    return (
        <Container>
            <Header title="Create Post" />
            <Content>
                <Input name="title" placeholder="Post title" onChange={handleInputChange} />
                <Textarea name="content" placeholder="Post content" rows="10" onChange={handleInputChange}></Textarea>
                <Button onClick={handleSubmit}>Save</Button>
            </Content>
        </Container>
    )
}

export default CreatePost
