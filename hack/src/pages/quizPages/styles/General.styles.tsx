import styled from 'styled-components'

const Wrapper = styled.div`

`

const QuestionCard = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    background-color: #ff8484;
    border-radius: 7px;
`

const CardTitle = styled.h1`
    margin-bottom: 50px;
    margin-top: 50px;
`

const QuestionNumber = styled.h1`
    text-align: left;
    margin-left: 10px;
`

const Choices = styled.button`
    margin: 0 25rem 3rem 25rem;
    font-size: 18px;
`

const Next = styled.button`
    background: transparent;
    border: none !important;
    font-size:0;
`

const Correct = styled.h3`

`

const RightAnswer = styled.h3`

`

export {Wrapper, QuestionCard, CardTitle, QuestionNumber, Choices, Next, Correct, RightAnswer};