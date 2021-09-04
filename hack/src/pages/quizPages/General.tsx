import React, {useState, useEffect} from 'react'
import {Wrapper, QuestionCard, CardTitle, QuestionNumber, Choices, Correct, RightAnswer} from './styles/General.styles'
import general from '../../data/general.json'
import {Link} from 'react-router-dom';

const questionsObj = general.results;


function General() {
    const [curQuestionNumber, setCurQuestionNumber] = useState(0)
    const [check, setCheck] = useState(false)
    let curQuestion = questionsObj[curQuestionNumber].question
    const incorrectAnswers = questionsObj[curQuestionNumber].incorrect_answers
    const correctAnswer = questionsObj[curQuestionNumber].correct_answer
    const allAnswers = [...incorrectAnswers, correctAnswer]
    const [verif, setVerif] = useState("")
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
    }
    return (
        <Wrapper>
            <Link to="/quiz">
                <button className="" style={{fontSize: 18, marginLeft: 32, marginTop: 32,}}onClick={() => {}}>Back</button>
            </Link>
            <QuestionCard>
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
            {/*a == correctAnswer ? 
                <Correct>Correct!</Correct> 
                : 
                <div>
                    <Correct>Wrong!</Correct>
                    <RightAnswer>{correctAnswer}</RightAnswer>
                </div>
            */}
        </Wrapper>
    )
}

export default General
