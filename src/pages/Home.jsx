import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Posts from '../components/Posts'

const Wrapper = styled.div`
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-bottom: 80px;
`

const Button = styled(Link)`
    margin-top: 2rem;
    text-align: center;
    text-decoration: none;
    background-color: #FFDE7D;
    border: 2px solid #FFDE7D;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    width: min(100%, 20ch);
    color: inherit;

    &:hover {
        background-color: #e0b021;
        border-color: #e0b021;
        color: white;
    }
`

function Home() {
    return (
        <>
            <Hero />
            <Posts />
            <Wrapper>
                <Button to="/create">Create a post</Button>
            </Wrapper>
        </>
    )
}

export default Home
