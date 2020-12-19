import React, { useState } from 'react'
import BlocksContainer from '../BlocksContainer'
import styled from 'styled-components'


export default function AdaptiveMenu(){

  const [isOpen, setIsOpen] = useState(false)
    
    return (

      <Wraper>
          <Burger>
            <Head>
              <Button onClick = {() => setIsOpen(!isOpen)}>
                {isOpen? "Close": "Open"}
              </Button>              
            </Head>
            <Body>
              <Slide open = {isOpen}>
                <BlocksContainer />
              </Slide>
            </Body>
          </Burger>
          </Wraper>   
      );
}

const Wraper = styled.div`
    display: none;

    @media (max-width: 1100px) {
        overflow: hiden;
        width: 100%;
        position: fixed;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }
`
const Body = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: flex-end;
  
`
const Slide = styled.div`
  width:40%;
  height: 100%;
  background-color: rgb(220, 220, 220);
  transform: translateX(${props => props.open? "0": "1500px"});
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Button = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: black;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 30px;
  
`
const Head = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgb(209, 209, 209);
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
`

const Burger = styled.div`
  display: none;

  @media (max-width: 1100px) {
    
    display: flex;
    width: 100%;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`
