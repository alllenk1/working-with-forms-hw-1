import React, { useState } from 'react';
import type { MouseEvent, FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog, faHippo, faShrimp, faWorm, faFrog, faOtter, faKiwiBird, faDove,
         faCrow, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { cnIcon } from './Icon.classname';
import { IconProps } from '../../types';

import './Icon.css';

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

const Icon: FC<IconProps> = ({ params }) => {
    const [showIcon, setShowIcon] = useState(true);

    const handleIconDelete = (event: MouseEvent<SVGSVGElement>) => {
        setShowIcon(false);
    }

    return (
        showIcon ? (
            <FontAwesomeIcon className={cnIcon('')}
                icon={ICONS_MAP[params.shape]}
                onClick={handleIconDelete}                
                style={{
                    color: params.color,
                    fontSize: `${params.size}px`,
                    top: `${params.y}px`,
                    left: `${params.x}px`
                }}
            />
        ) : null
    )
}

export { Icon };