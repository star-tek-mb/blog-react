import styled from 'styled-components'

import shape1 from '../assets/shape1.svg'
import shape2 from '../assets/shape2.svg'

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 6rem;
    min-height: 100vh;

    background-image: url(${shape1}), url(${shape2});
    background-repeat: no-repeat;
    background-size: 612px 620px, 590px 431px;
    background-position: 70% 0, calc(70% + 202px) 283px;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: flex-start;
        min-height: 70vh;
        background-size: 306px 310px, 245px 215px;
        background-position: 70% 0, calc(70% + 101px) 141px;
    }
`

const Title = styled.h1`
    font-size: 9rem;
    margin-left: 6rem;
    max-width: 10ch;

    @media (max-width: 768px) {
        font-size: 4rem;
        margin-left: 2rem;
    }
`

function Hero() {
    return (
        <Container>
            <Title>B. Rizki Setiawan</Title>
        </Container>
    )
}

export default Hero
