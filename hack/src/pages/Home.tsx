import React, {useState, useEffect} from 'react'
import {Wrapper, Title, Span, Image1, Image2, SubTitle, Text} from './styles/Home.styles'
import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import asset from '../assets/asset.jpeg'
import asset2 from '../assets/asset2.jpg'

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <SimpleBarReact style={{maxHeight: 880, }} data-simplebar-force-visible>
            <Wrapper>
                <Title>
                    <Span>Pendemic Heven</Span> is a fun website to help get through this pendemic.
                </Title>
            </Wrapper>
            <Wrapper style={{
                    position: "absolute",
                    top: 0,
                    left: 50,
                    zIndex: 2,
                    transform: `translateY(${offsetY * 2}px)`
                }}>
                <Image1 style={{transform: `translateY(${offsetY * 9}px)`}} src={asset}/>
            </Wrapper>
            <Wrapper >
                <Image2 src={asset2}/>
            </Wrapper>
            <Wrapper>
                <SubTitle>Mission & Vision</SubTitle>
                <Text>This is Pendemic Heven, a fun interactive website to help take the ease off the pendemic. As we are inching closer to re-opening we want to provide you entertainment, quizes, games, and a way to express yourself. Our goal is to get you through the pendemic having fun and challenging your mind.</Text>
            </Wrapper>
        </SimpleBarReact>
    )
}

export default Home
