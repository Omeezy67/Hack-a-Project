import React, {useState, useEffect} from 'react'
import {Wrapper, QuestionCard, CardTitle, QuestionNumber, Choices, Correct, RightAnswer} from './styles/General.styles'
import general from '../../data/history.json'
import {Link} from 'react-router-dom';

const questionsObj = general.results;


function History() {
    const [curQuestionNumber, setCurQuestionNumber] = useState(0)
    const [check, setCheck] = useState(false)
    let curQuestion = questionsObj[curQuestionNumber].question
    const incorrectAnswers = questionsObj[curQuestionNumber].incorrect_answers
    const correctAnswer = questionsObj[curQuestionNumber].correct_answer
    const allAnswers = [...incorrectAnswers, correctAnswer]
    const [verif, setVerif] = useState("")
    const [smart, setSmart] = useState(0)
    useEffect(() => {
        console.log("render")
        curQuestion = questionsObj[curQuestionNumber].question 
    }, [curQuestionNumber])
    const shuffleArray = (array: any[]) =>
        [...array].sort(() => Math.random() - 0.5);
    const randAnswers = shuffleArray(allAnswers);
    let a;
    const onButtonClick = (ans: string) => {
        setCheck(true);
        a = ans
        a === correctAnswer ? setVerif("Correct") : setVerif(`Wrong. Answer: ${correctAnswer}`);
        a === correctAnswer ? setSmart(smart+1) : setSmart(smart);
    }
    return (
        <Wrapper>
            <Link to="/quiz">
                <button className="" style={{fontSize: 18, marginLeft: 32, marginTop: 32,}}onClick={() => {}}>Back</button>
            </Link>
            <QuestionCard>
                <h1>Correct count: {smart}</h1>
                <QuestionNumber>Question: {curQuestionNumber + 1}/{questionsObj.length}</QuestionNumber>
                <CardTitle>{`${curQuestion}`}</CardTitle>
                { check ? 
                null
                : 
                randAnswers.map((answer, akey) => {
                    console.log(answer);
                    return(
                        <Choices key={akey} onClick={() => {
                            console.log(answer);
                            onButtonClick(answer)
                        }}>{answer}</Choices>
                    )
                })}
                <button style={{
                    background: check ? "" :"transparent",
                    border: check ? "" : "none",
                    fontSize: check ? 18 : 0,
                    marginTop: "4rem",
                    marginLeft: "23rem",
                    marginBottom: "6rem",
                    marginRight: "23rem",
                }} onClick={() => {
                    setCurQuestionNumber((curQuestionNumber+1)%50);
                    setCheck(false)
                }}>next</button>
                <h3 style={{
                    background: check ? "" :"transparent",
                    border: check ? "" : "none",
                    fontSize: check ? 18 : 0,
                }}>{verif}</h3>
            </QuestionCard>
        </Wrapper>
    )
}

export default History
