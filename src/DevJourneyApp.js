import React from 'react'
import { AppBody } from './components/AppBody'
import { AppHeader } from './components/AppHeader'

import './css/desktop.css';
import './css/tablet.css';
import './css/small-mobile.css';
import './css/mobile.css';

export const DevJourneyApp = () => {
    return (
        <>
            <AppHeader />
            <AppBody />
        </>
    )
}
