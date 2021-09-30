import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import NotFound from './NotFound'

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

function Post() {
    let { slug } = useParams()
    let [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/api/posts/${slug}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject()
                }
                return res.json()
            }).then(json => setPost(json))
    }, [])

    if (!post) {
        return <NotFound />
    }

    return (
        <Container>
            <Header title={post.title} />
            <Content>{post.content}</Content>
        </Container>
    )
}

export default Post
