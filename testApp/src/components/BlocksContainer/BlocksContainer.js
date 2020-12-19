import React from 'react'
import FirstMenu from '../FirstMenu'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export default function BlocksContainer(){

    const data = useSelector( state => state.data)

    return(
        <Container>
            {data.map( (el, ind) => 
                <FirstMenu path = {el.path} id = {el.id} items = {el.items} key = {ind}>
                    {el.title} 	
                </FirstMenu>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    overflow: scroll;
`
