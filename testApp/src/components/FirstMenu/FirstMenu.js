import React, { useState } from 'react'
import SecondMenu from '../SecondMenu'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { toOpenMenu } from '../store/actions'
import { Link } from "react-router-dom";

export default function AdaptiveBlock(props){

    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(null)
    
    const dispatch = useDispatch();

    const openMenu = useSelector( state => state.openMenu)
    

    function openTab(){
        setOpen(!open)
        setActiveTab(props.id)
        dispatch(toOpenMenu(props.id))
    }

    return(
        <div>
            <Head>
                <Link to = {`/testApp${props.path}`} key = {props.id}>
                    <Title id = {props.id} items = {props.items}>
                        {props.children}    
                    </Title>
                </Link>
                <MoreTab onClick = { openTab }>+</MoreTab>
            </Head>

            {open && activeTab === openMenu ?

                   props.items.map( (el, ind) => 
                    <SecondMenu key = {ind} id = {props.id} element = {el} items = {props.items} />
                )
                : 

                ""
                        }
        </div>
    )

}

const MoreTab = styled.span`
    width: 20%;
`

const Title = styled.div`
    text-align: center;
    height: 40px;
    width: 150px;
    background-color: rgb(230, 230, 230);
    margin: 5px 0;
`

const Head = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`