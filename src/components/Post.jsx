import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
`

const Title = styled(Link)`
    font-size: 2.25rem;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Text = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
    margin-left: 2.4rem;
    margin-top: 2.4rem;
`

function Post({ title, content, slug }) {
    return (
        <Container>
            <Title to={slug}>{title}</Title>
            <Text>{content}</Text>
        </Container>
    )
}

export default Post
