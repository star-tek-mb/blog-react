import styled from 'styled-components'
import { Link } from 'react-router-dom'
import back from '../assets/arrow-left.svg'

const Container = styled.div`
    display: flex;
`

const Back = styled.img`
    height: 4rem;
    width: auto;
    margin-right: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        height: 2rem;
        margin-top: 1rem;
        margin-right: 2rem;
    }

    &:hover {
        transform: translateX(-1rem);
    }
`

const Title = styled.h1`
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

function Header({ title }) {
    return (
        <Container>
            <Link to="/"><Back src={back} /></Link>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header
