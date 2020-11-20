import React from 'react'

export const AppHeader = () => {
    return (
        <header>
            <div className="title-container">
                <h1>Karla Navas Dev Journey</h1>
                <input id="searchField" type="text" className="form-search" autocomplete="off" placeholder="Tech term search"/>
            </div>
            <div className="pic-container">
                <div><img src="./assets/images/avatar-normal.jpg" /></div>
                <div id="wittyComment" className="witty">hello!</div>
            </div>
        </header>
    )
}
