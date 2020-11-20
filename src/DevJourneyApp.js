import React from 'react'
import { AppBody } from './components/AppBody'
import { AppHeader } from './components/AppHeader'

import 'bootstrap/dist/css/bootstrap.min.css';

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
