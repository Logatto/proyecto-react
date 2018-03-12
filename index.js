import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './src/categories/components/categories';
import data from './src/api.json';

// console.log('Hola mundo!')

const app = document.getElementById('app')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante! eso</h1>;
ReactDOM.render(<Categories data={data}/> , app);

