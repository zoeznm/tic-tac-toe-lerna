// packages/client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client로 변경
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('React App is running!');
root.render(
        <App />
        
);