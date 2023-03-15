import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/CoHeadlineW23ArabicBold.ttf"
import "./fonts/CoHeadlineW23ArabicLight.ttf"
import "./fonts/CoHeadlineW23ArabicRegular.ttf"
import "./fonts/Tahoma_Regular_font.ttf";
import "./fonts/Tahoma.ttf"
import "./fonts/Tahoma.woff"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
