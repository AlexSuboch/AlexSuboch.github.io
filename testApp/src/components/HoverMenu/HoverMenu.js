import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { clearActiveMenu, clearActiveTab, setActiveMenu } from '../store/actions'
import { Link } from 'react-router-dom'

export default function HoverMenu() {

    const dispatch = useDispatch()

    const activeTab = useSelector(state => state.activeTab)
    const data = useSelector(state => state.data)

    return (
        activeTab ?
            <Menu onMouseEnter={() => dispatch(setActiveMenu())} onMouseLeave={() => {
                dispatch(clearActiveMenu())
                dispatch(clearActiveTab())
            }}>
                <Ul>
                    {data[activeTab - 1].items.map((e, i) =>
                            <Li key={i}>
                                <Link key = {i} to={`/testApp${e.path}`}>
                                    <P>{e.title}</P>
                                </Link>
                                {e.items.map((e, i) =>
                                <Link key = {i} to={`/testApp${e.path}`}>
                                    <Psm key={i}>{e.title}</Psm>
                                </Link>
                                )}
                            </Li>
                    )}
                </Ul>
            </Menu>
            :
            ''
    )
}

const Menu = styled.div`
    position: absolute;
    width:900px;
    height: 200px;
    background-color: white;
    top: 90px;
    border-top: 2px solid rgb(209, 209, 209);
    font-family: 'Verdana', sans-serif;
    @media (max-width: 1100px) {
        display: none;
      }
`

const Ul = styled.ul`
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: space-evenly;
`

const Li = styled.li`
    width: 140px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const P = styled.p`
    font-size 15px;
    text-transform: uppercase;
    font-weight: bold;
`

const Psm = styled.p`
    font-size: 12px;
`