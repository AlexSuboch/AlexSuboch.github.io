import React from 'react'
import NavTab from '../NavTab'
import { useSelector, useDispatch } from 'react-redux'
import { clearActiveTab } from '../store/actions'
import styled from 'styled-components'
import { Link } from "react-router-dom";


export default function Nav(){

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    return(
        
        <Wrapper onMouseEnter = { () => dispatch(clearActiveTab())}> 
            <NavUl>
                {data.map((e, i) => 
                <Link to = {`/testApp${e.path}`} key = {i}> 
                    <NavTab id = {data[i].id} key = {i} title = {e.title} /> 
                </Link>)}
            </NavUl >
        </Wrapper>
        
    )
}

const NavUl = styled.div`
    padding-top: 20px;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    width: 1000px;
    height: 100%;
    font-family: 'Verdana', sans-serif;
    cursor: pointer;
    @media (max-width: 1100px) {
        display: none;
      }
`
const Wrapper = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justifuy-content: center;
    
    @media (max-width: 1100px) {
        display: none;
      }
`