import React from 'react';
import ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// Create a root instance
const root = createRoot(document.getElementById('root')); // Replace 'root' with the ID of your root DOM element.

// Use the root instance to render your React component
root.render(<App />);