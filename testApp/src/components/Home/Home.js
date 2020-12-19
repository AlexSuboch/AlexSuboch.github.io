import React from 'react'
import Main from '../Main'
import Header from '../Header'
import styled from 'styled-components'

export default function Home(){
    return(
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`