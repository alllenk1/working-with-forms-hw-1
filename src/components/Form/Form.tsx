import React, { useState } from 'react';
import type { ChangeEvent, FC } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

import { cnForm } from './Form.classname';
import { FormProps } from '../../types';

import './Form.css';

const DEFAULT_ICONS = {
    shape: 'Cat',
    size: '50',
    color: '#808080',
};

const initialIcons = ['Cat', 'Dog', 'Hippo', 'Shrimp', 'Worm', 'Frog', 'Otter', 'Kiwi-bird', 'Dove', 'Crow'];

const Form: FC<FormProps> = ({ coords, onClose }) => {
    const [params, setParams] = useState(DEFAULT_ICONS);

    const handleUpdateParams = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setParams(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const handleAddIcon = () => {
        onClose(params.shape, params.size, params.color)
    }

    return (
        <form
            className={cnForm()}
            onSubmit={handleAddIcon}
            style={{
                top: `${coords.y}px`,
                left: `${coords.x}px`
            }}
        >
            <TextField
                className={cnForm('Input')}
                select
                label="Shape"
                id="shape"
                name="shape"
                value={params.shape}
                onChange={handleUpdateParams}
            >
                {initialIcons.map((icon, index) =>
                    <MenuItem key={index} value={icon}>{icon}</MenuItem>)
                }
            </TextField>
            <TextField
                className={cnForm('Input')}
                label="Size"
                variant="outlined"
                id="size"
                name="size"
                value={params.size}
                onChange={handleUpdateParams}
            />
            <input
                className={cnForm('Input')}
                id="color"
                name="color"
                type="color"
                value={params.color}
                onChange={handleUpdateParams}
            />

            <div className={cnForm('ButtonBlock')}>
                <Button className={cnForm('Button')} variant="outlined" type="submit">
                    Добавить
                </Button>
            </div>
        </form>  
    ) 
};

export { Form };