import React from 'react'
import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'
import {Wrapper, Title, Card, Desc, CardTitle, CardWrapper} from './styles/Quiz.styles'
import './styles/Quiz.css'
import {general, science, sports, animals, americanHistory} from '../assets/index'

import {Link} from 'react-router-dom';

function Quiz() {
    return (
        <SimpleBarReact style={{maxHeight: 880, }} data-simplebar-force-visible>
            <Wrapper>
                <Title>Fun Quizes</Title>
                <CardWrapper>
                <Card>
                    <CardTitle>General</CardTitle>
                    <img className="Image" src={general} alt="popular"/>
                    <Desc>These are general questions.</Desc>
                    <Link to="/quiz/general">
                        <p className="button" onClick={() => {}}>Play</p>
                    </Link>
                </Card>
                <Card>
                    <CardTitle>Animals</CardTitle>
                    <img className="Image" src={animals} alt="animals"/>
                    <Desc>These questions are about animals.</Desc>
                    <Link to="/quiz/animals">
                        <p className="button" onClick={() => {}}>Play</p>
                    </Link>
                </Card>
                <Card>
                    <CardTitle>History</CardTitle>
                    <img className="Image" src={americanHistory} alt="american history"/>
                    <Desc>These are questions about history.</Desc>
                    <Link to="/quiz/history">
                        <p className="button" onClick={() => {}}>Play</p>
                    </Link>
                </Card>
                <Card>
                    <CardTitle>Science</CardTitle>
                    <img className="Image" src={science} alt="science"/>
                    <Desc>These are questions about science and nature.</Desc>
                    <Link to="/quiz/science">
                        <p className="button" onClick={() => {}}>Play</p>
                    </Link>
                </Card>
                <Card>
                    <CardTitle>Sports</CardTitle>
                    <img className="Image" src={sports} alt="sports"/>
                    <Desc>Description Goes Here.</Desc>
                    <Link to="/quiz/sports">
                        <p className="button" onClick={() => {}}>Play</p>
                    </Link>
                </Card>
                </CardWrapper>
            </Wrapper>
        </SimpleBarReact>
    )
}

export default Quiz;