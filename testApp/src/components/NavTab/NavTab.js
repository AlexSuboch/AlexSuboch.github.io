import React from 'react'
import { setActiveTab } from '../store/actions'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export default function NavTab(props){

    const dispatch = useDispatch()

    return(
        <Tab index = {props.index} onMouseEnter = {() => {
            dispatch(setActiveTab(props.id))
        }} >
            {props.title}
        </Tab>
    )
}

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding-bottom: 52px;

    &:hover{
        border-bottom: 3px solid orange;
        transition: 50ms;
    }

    @media (max-width: 1100px) {
        display: none;
      }

`