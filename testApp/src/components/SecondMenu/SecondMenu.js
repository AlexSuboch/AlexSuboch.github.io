import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { toOpenSecondMenu } from '../store/actions'
import styled from 'styled-components'


export default function SecondMenu(props){

    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(null)
    
    const dispatch = useDispatch();

    const openSecondMenu = useSelector( state => state.openSecondMenu)

    return(
            <Container>
                <Body key = {props.element.id}>
                    <Link to = {`/testApp${props.element.path}`}>
                        <SmDiv key = {props.element.id}>
                            {props.element.title}
                        </SmDiv>
                    </Link>
                    <MoreTab onClick = { () =>{
                        setOpen(!open)
                        setActiveTab(props.element.id)
                        dispatch(toOpenSecondMenu(props.element.id))
                    }}>
                        +
                    </MoreTab>
                </Body>
                {open && activeTab === openSecondMenu ?
                         props.element.items.map( (el, ind) =>
                        <Link key = {ind} to = {`/testApp/${el.path}`}> 
                            <p>{el.title}</p>
                        </Link>
                         )
                     :
                     ""
                }    
            </Container>
    )
}

const SmDiv = styled.div`
    text-align: center;
    height: 30px;
    width: 120px;
    background-color: rgb(230, 230, 230);
    margin: 5px 0;
`

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const Body = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`

const MoreTab = styled.span`
    width: 20%;
`