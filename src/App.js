import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Routes from './components/Routes';

export default function App() {
  return (
    <Routes exact path='https://github.com/moogiecodes/meganchoi' />
  );
}

