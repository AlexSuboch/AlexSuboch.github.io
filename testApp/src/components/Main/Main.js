import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { clearActiveMenu, clearActiveTab } from '../store/actions'

export default function Main(props){

    const activeTab = useSelector(state => state.activeTab)
    const dispatch = useDispatch()
    

    return(
        <MainShadow activeTab = {activeTab} onMouseEnter = { () =>{
            dispatch(clearActiveTab())
            dispatch(clearActiveMenu())
        }}>
            <Container>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
            </Container>
        </MainShadow>
    )
}

const MainShadow = styled.div`
    background-color: ${props => props.activeTab ? "rgba(0, 0, 0, 0.4)" : "rgb(255, 255, 255)"};
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    z-index: -1;
    @media (max-width: 1100px) {
        width: 700px;
        padding-top: 100px;
    }
    @media (max-width: 700px) {
        width: 300px;
    }
`

const Container = styled.div`
    border-top: 5px solid ${props => props.activeTab ? "rgb(255,255,255)": "rgb(209,209,209)"};
    width: 1100px;
    height: 100%;
    @media (max-width: 1100px) {
        width: 700px;
    }
    @media (max-width: 700px) {
        width: 300px;
    }

`

const Paragraph = styled.p`
    font-family: 'Verdana', sans-serif;
    padding: 15px;
`