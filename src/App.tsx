import React, {useState} from 'react';
import type { MouseEvent } from 'react';

import { cnApp } from './App.classname';
import { Form } from './components/Form/Form';
import { Icon } from './components/Icon/Icon';
import type { IconsType } from './types';
 
import './App.css';

const DEFAULT_COORDS = {
    x: 0,
    y: 0
};

const App = () => {
    const [isFormOpen, setFormOpen] = useState(false);
    const [isIconOpen, setIconOpen] = useState(false);
    const [coords, setCoords] = useState(DEFAULT_COORDS);
    const [params, setParams] = useState<IconsType[]>([]);

    const handleMouseClick = (event: MouseEvent) => {
        if (!isFormOpen) {
            setFormOpen(true);
            setCoords({ x: event.clientX, y: event.clientY });
        }
    }

    const handleFormClose = (shape: string, size: string, color: string) => {
        setFormOpen(false);
        setParams(prev => [...prev, { shape, size, color, x: coords.x, y: coords.y }]);
        setIconOpen(true);
    }

    return (
        <div className={cnApp()} onClick={handleMouseClick}>
            <h1 className={cnApp('Title')}>8.3 Работа с формами в React</h1>
            <h2 className={cnApp('Subtitle')}>Фигурки</h2>

            <p>Чтобы добавить фигурку, кликните куда-нибудь и заполните форму.</p>
            <p>Чтобы удалить — кликните на фигурку.</p>

            {isFormOpen && <Form coords={coords} onClose={handleFormClose}/>}
            {isIconOpen && params.map(param => <Icon key={`${param.x}${param.y}`} params={param} />)}
        </div>
    )
}

export default App;
