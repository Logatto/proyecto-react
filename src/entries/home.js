import React from 'react';
import ReactDOM from 'react-dom';
// import Categories from './src/categories/components/categories';

import Home from '../pages/containers/home';


import data from '../api.json';

// console.log('Hola mundo!')

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante! eso</h1>;
ReactDOM.render(<Home data={data}/> , homeContainer);

