import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100vh;
`

const Text = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    &:after {
        display: block;
        content: '';
        width: 13ch;
        border-bottom: 43px solid #FFDE7D;
        margin-top: -43px;
    }
    @media (max-width: 768px) {
        font-size: 2rem;
        &:after {
            border-bottom: 15px solid #FFDE7D;
            margin-top: -20px;
        }
    }
`

function NotFound() {
    return (
        <Container>
            <Text>Page not found</Text>
        </Container>
    )
}

export default NotFound
