import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import * as Shapes from 'react-awesome-shapes';

import { cnForm } from './Figures.classname';

const FIGURES = ['Circle', 'Donut', 'CircleGrid', 'Diamond', 'PolygonCard', 'Polygon', 
                         'Star', 'Cross', 'SquareDonut', 'Arrow', 'Message', 'Heart']

const DEFAULT_FIGURE = {
  shape: 'Circle',
  color: '#000000',
  size: 250
}

const Figures = () => {
  const [figures, setFigures] = useState(DEFAULT_FIGURE);

  const handleUpdateFigures = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFigures((prev) => ({
      ...prev,
        [event.target.name]: event.target.value
    }));
  };

  console.log(figures);

  return (
    <div className={cnForm()}>
      <form className={cnForm('Form')}>
        <label htmlFor="shape">Figure</label>
        <select 
          id="shape"
          name="shape" 
          value={figures.shape}
          onChange={handleUpdateFigures} 
        >
          <option value="">-- Choose figure --</option>
          {
            FIGURES.map((figure) => <option key={figure} value={figure}>{figure}</option>)
          }
        </select>

        <label htmlFor="color">Color</label>
        <input 
          id="color"
          name="color" 
          type="color" 
          value={figures.color}
          onChange={handleUpdateFigures} 
        />

        <label htmlFor="size">Size</label>
        <input 
          id="size"
          name="size" 
          type="text" 
          value={figures.size}
          onChange={handleUpdateFigures} 
        />

        <button className={cnForm('Button')}>Добавить</button>
      </form>
    </div>
  );
}

export { Figures };