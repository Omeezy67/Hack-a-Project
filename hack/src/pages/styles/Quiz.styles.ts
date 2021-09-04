import styled from 'styled-components'

const Wrapper = styled.div`

`

const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-bottom: 10rem;
    margin-top: 5rem;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
`

const Card = styled.div`
    width: 400px;
    height: 500px;
    margin: 0 8rem 5rem 20rem;
    align-items: center;
    border-radius: 4px;
    box-shadow: 5px 5px 5px 5px;
    background-color: #FFDDCA;
`

const Desc = styled.p`
    margin: 3rem 3rem 4rem 6rem;

`

const CardTitle = styled.h2`
    text-align: center;
`

export {Wrapper, Title, Card, Desc, CardTitle, CardWrapper};