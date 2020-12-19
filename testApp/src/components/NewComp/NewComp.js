import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components'


export default function NewComp(){

    const { id } = useParams();
    const  history  = useHistory()
  

    return(
        <Card>
            <P>{id}</P>
            <div>
                <Tab onClick = {() => history.goBack()}>Go Back</Tab>
            </div>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const P = styled.p`
    font-size 15px;
    text-transform: uppercase;
    font-weight: bold;
`
const Tab = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding-bottom: 52px;

    &:hover{
        border-bottom: 3px solid orange;
        transition: 50ms;
    }
`