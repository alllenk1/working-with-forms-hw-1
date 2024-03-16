import React, { useState } from 'react';

import { cnApp } from './App.classname';
import { Figures } from './components/Figures/Figures'
 
import './App.css';

const App = () => {
  return (
    <div className={cnApp()}>
      <h1 className={cnApp('Title')}>8.3 Работа с формами в React</h1>

      <h2 className={cnApp('Subtitle')}>Фигурки</h2>

      <Figures />
    </div>
  )
}

export default App;
