import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavB from './components/NavB';
import { BookConsole } from './components/Book/BookConsole';
import { MemberConsole } from './components/Members/MemberConsole';

function App() {
  return (
  <>
    <NavB/>
    <MemberConsole/>
  </>
    
  );
}

export default App;
