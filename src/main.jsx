import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

  // // Surrounding App with the below tags runs each function twice by default
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
