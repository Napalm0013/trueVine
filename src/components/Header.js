import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a>
          <img src='/images/TrueVineLogo.png' alt="" />
        </a>
        <Menu>
          <p><a href="#">Home</a></p>
          <p><a href="#">Leadership Team</a></p>
          <p><a href="#">Community</a></p>
          <p><a href="#">Calendar</a></p>
          <p><a href="#">Goals</a></p>
        </Menu>
        <RightMenu>
          <a href="https://cash.app/$tvbflompoc">Donate</a>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    max-height: 60px;
    position: fixed;
    display: flex;
    align-itmes: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 5px;
    img {
      margin-left: -150px;
      margin-top: -10px;
      height: 150%;
      width: 180%;
      object-fit: contain;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
      display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    background-color: rgba(160, 184, 60, .8);
    padding: 10px;
    margin: 10px;
    align-items: center;
    justify content: center;
    border-radius: 100px;

    a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;      
    }

`