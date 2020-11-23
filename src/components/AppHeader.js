import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';

export const AppHeader = () => {
    const {keywords, dispatch} = useContext(SearchContext);

    const handleKeywords = (e) => {
        dispatch({
            type: 'update',
            payload: e.target.value
        });
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
