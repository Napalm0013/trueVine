import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Foot>Footer</Foot>
  )
}

const Foot = styled.div`
    width: 100vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; //horizontal alignment
    `

export default Footer