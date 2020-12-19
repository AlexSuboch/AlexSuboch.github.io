import React from 'react'
import Nav from '../Nav'
import HoverMenu from '../HoverMenu'
import AdaptiveMenu from '../AdaptiveMenu'

export default function Header(){
    return(
        <div style = {{width: "100%"}}>
            <div style = {{width: "100%", display: "flex", flexFlow: "column", justifyContent: "center", alignItems:"center"}}>
                <Nav />
                <HoverMenu />
            </div>
            
            <AdaptiveMenu />
        </div>
    )
}