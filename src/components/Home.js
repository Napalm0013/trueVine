import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="True Vine Bible Fellowship"
            description="Through evangelism, discipleship, fellowhip, vision, and excellence, True Vine connects spirtually, culturually, locally,
            and globally through the gospel message and ministry."
            backgroundImage= "theVine.jpg"
            topBtnText = "Donate Here!"
            btmBtnText = "Our Goals"
        />
        <Section
            title="Spiritually"
            description="With extensive knowledge of and research into the Word, our Leadership team can help lead individuals from all walks of
                          life on their spiritual journey."
            backgroundImage= "spiritual.jpg"
            topBtnText = "Donate Here!"
            btmBtnText = "Our Goals"        
        />
        <Section
            title="Culturally"
            description="With extensive knowledge of and research into the Word, our Leadership team can help lead individuals from all walks of
                          life on their spiritual journey."
            backgroundImage= "cultural.jpg"
            topBtnText = "Donate Here!"
            btmBtnText = "Our Goals"          
        />
        <Section 
            title="Locally"
            description="With extensive knowledge of and research into the Word, our Leadership team can help lead individuals from all walks of
                          life on their spiritual journey."
            backgroundImage= "local.jpg"
            topBtnText = "Donate Here!"
            btmBtnText = "Our Goals"          
         />
         <Section
            title="Globally"
            description="With extensive knowledge of and research into the Word, our Leadership team can help lead individuals from all walks of
                          life on their spiritual journey."
            backgroundImage= "global.jpg"
            topBtnText = "Our Partners"        
         />


    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh
`