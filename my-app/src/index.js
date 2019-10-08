import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import MainPage from './components/MainPage';

ReactDOM.render(
<Router>
<MainPage />
</Router>
, document.getElementById('root'))
