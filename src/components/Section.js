import React from 'react'
import styled from "styled-components"


function Section({ title, description, topBtnText, btmBtnText, backgroundImage }) {
  return (
    <Wrap bgImage={backgroundImage} >
        <ItemText>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <TopButton>
                    {topBtnText}
                </TopButton>
                {btmBtnText && 
                    <BottomButton>
                    {btmBtnText}
                    </BottomButton>
                }

            </ButtonGroup>
            <DownArrow src="/images/downArrow.png" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:  ${ props => `url("/images/${props.bgImage}")` };
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; //horizontal alignment
    border-bottom: 10px solid rgba(165, 55, 253, .7);
`

const ItemText = styled.div`
    margin-top: 60px;
    padding: 5vh;
    text-align: center;
    background-color: rgba(70, 12, 103, .7);
    border-radius: 25px;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const TopButton = styled.div`
        padding: 5px;
        background-color: black;
        height: 40px;
        width: 256px;
        border-radius: 100px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.85;
        &:hover {
            opacity: 1;
        }
        font-size: 20px;
        cursor: pointer;
        margin: 10px;
        
`

const BottomButton = styled(TopButton)`
    background-color: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`