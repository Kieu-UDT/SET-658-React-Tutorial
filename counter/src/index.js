import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found. Make sure your HTML has a <div id="root"></div>');
}
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
