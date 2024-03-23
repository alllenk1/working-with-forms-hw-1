import React, { useState } from 'react';
import type { ChangeEvent, FormEvent, MouseEvent, FC } from 'react';
import { TextField, MenuItem, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog, faHippo, faShrimp, faWorm, faFrog, faOtter, faKiwiBird, faDove,
         faCrow, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { cnForm } from './Icons.classname';
import { IconProps, IconsType } from './types';

import './icons.css';

const initialIcons = ['Cat', 'Dog', 'Hippo', 'Shrimp', 'Worm', 'Frog', 'Otter', 'Kiwi-bird',
    'Dove', 'Crow'];

const DEFAULT_ICONS = {
    shape: 'Cat',
    size: '50',
    color: '#808080',
};

const ICONS_MAP: { [key: string]: IconDefinition } = {
    'Cat': faCat,
    'Dog': faDog,
    'Hippo': faHippo,
    'Shrimp': faShrimp,
    'Worm': faWorm,
    'Frog': faFrog,
    'Otter': faOtter,
    'Kiwi-bird': faKiwiBird,
    'Dove': faDove,
    'Crow': faCrow
}

const Icons: FC<IconProps> = ({ x, y, onFormClose }) => {
   const [params, setParams] = useState<IconsType>(DEFAULT_ICONS);
   const [isFormOpen, setFormOpen] = useState(true);

   const handleUpdateParams = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
       setParams(prev => ({
           ...prev,
           [event.target.name]: event.target.value
       }));
   }

    const handleAddIcon = (event: FormEvent) => {
        event.preventDefault();
        setFormOpen(false);
    }

    const handleIconClick = (event: MouseEvent<SVGSVGElement>) => {
        setFormOpen(true);
        onFormClose();
    }

    return isFormOpen ? (
        <form
            className={cnForm()}
            onSubmit={handleAddIcon}
            style={{
                top: `${y}px`,
                left: `${x}px`
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
    ) : (
        <FontAwesomeIcon
            className={cnForm('Icon')}
            icon={ICONS_MAP[params.shape]}
            onClick={handleIconClick}
            style={{
                color: params.color,
                fontSize: `${params.size}px`,
                top: `${y}px`,
                left: `${x}px`
            }}
        />
    )
}
export {Icons};