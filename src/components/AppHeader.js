import React, { useState } from 'react'

export const AppHeader = () => {
    const [keywords, setKeywords] = useState('');

    const handleKeywords = (e) => {
        setKeywords(e.target.value);
    };

    return (
        <header>
            <div className="title-container">
                <h1>Karla Navas Dev Journey</h1>
                <input 
                    type="text" 
                    className="form-search" 
                    autoComplete="off" 
                    placeholder="Tech term search"
                    value={keywords}
                    onChange={ handleKeywords }
                />
            </div>
            <div className="pic-container">
                <div><img src="./assets/images/avatar-normal.jpg" alt="Me" /></div>
                <div id="wittyComment" className="witty">hello!</div>
            </div>
        </header>
    )
}
