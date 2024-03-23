import React, {useState} from 'react';
import type { MouseEvent } from "react";

import { cnApp } from './App.classname';
import { Icons } from './components/Icons/Icons'
 
import './App.css';

const DEFAULT_COORDS = [0, 0];

const App = () => {
    const [isFormOpen, setFormOpen] = useState(false);
    const [coords, setCoords] = useState(DEFAULT_COORDS);
    const [x, y] = coords;

    const handleMouseClick = (event: MouseEvent<HTMLDivElement>) => {
        if (!isFormOpen) {
            setCoords([event.clientX, event.clientY]);
            setFormOpen(true);
        }
    };

    const handleFormClose = () => {
        setFormOpen(false);
    };

    return (
        <div className={cnApp()} onClick={handleMouseClick}>
            <h1 className={cnApp('Title')}>8.3 Работа с формами в React</h1>

            <h2 className={cnApp('Subtitle')}>Фигурки</h2>

            {isFormOpen && <Icons x={x} y={y} onFormClose={handleFormClose}/>}
        </div>
    )
}

export default App;
