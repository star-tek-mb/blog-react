import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Post from './Post'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 6rem;
`

const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 80px;
    &:after {
        display: block;
        content: '';
        width: 10ch;
        border-bottom: 43px solid #FFDE7D;
        margin-top: -43px;
    }
    @media (max-width: 768px) {
        font-size: 3rem;
        &:after {
            border-bottom: 20px solid #FFDE7D;
            margin-top: -30px;
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    & div {
        flex-basis: 50%;
        padding: 20px;
    }

    @media (max-width: 768px) {
        & div {
            flex-basis: 100%;
            padding: 20px;
        }
    }
`

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/posts')
            .then(res => res.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <Container>
            <Title>New Posts</Title>
            <Wrapper>
                {posts.map(post => (
                    <Post key={post._id} slug={post.slug} title={post.title} content={post.content} />
                ))}
                {/*<Post title="Easy Javascript Tutorial" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <Post title="100 day challenge" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <Post title="Seru-seruan dengan JS" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <Post title="Belajar Vue Js Pemula" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />*/}
            </Wrapper>
        </Container>
    )
}

export default Posts
