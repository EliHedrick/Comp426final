import React from 'react'
import profile from './profile.png'
import snake from './snake.png'

export default function TopBar() {
    return (
        <div id='topbar'>
            <img src={profile} alt='' id='profilepic'></img>
            <img src={snake} alt='' id='snakepic'></img>
            <h2 id='score'>Score: 0</h2>
        </div>
    )
}
