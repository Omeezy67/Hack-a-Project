import styled from 'styled-components'

const Wrapper = styled.div`

`

const Title = styled.h1`
    color: #000000;
    font-size: 100px;
    position: relative;
    margin-left: 200px;
    margin-right: 490px;
    padding-bottom: 600px;
    padding-top: 200px;
    z-index: 100;
`

const Span = styled.span`
    color: rgb(255, 0, 85);
`

const Image1 = styled.img`
    position: absolute;
    top: 500px;
    left: 50px;
    z-index: 2;
`

const Image2 = styled.img`
    position: absolute;
    width: 800px;
    height: 400px;
    top: 300px;
    right: 50px;
`

const SubTitle = styled.h2`
    margin: 0 800px 10px 800px;
    font-size: 16px;
`

const Text = styled.p`
    margin: 0 800px 0 800px;
    line-height: 32px;
`

export {Wrapper, Title, Span, Image1, Image2, SubTitle, Text};