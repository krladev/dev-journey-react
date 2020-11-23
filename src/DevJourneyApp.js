import React, { useReducer } from 'react'
import { AppBody } from './components/AppBody'
import { AppHeader } from './components/AppHeader'
import { SearchContext } from './context/SearchContext';
import { keywordsReducer } from './context/keywordsReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './css/desktop.css';
import './css/tablet.css';
import './css/small-mobile.css';
import './css/mobile.css';

export const DevJourneyApp = () => {
    const [keywords, dispatch] = useReducer(keywordsReducer, '');

    return (
        <SearchContext.Provider value={{keywords, dispatch}}>
            <AppHeader />
            <AppBody />
        </SearchContext.Provider>
    )
}
