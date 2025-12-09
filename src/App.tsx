import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavB from './components/NavB';
import { BookConsole } from './components/Book/BookConsole';
import { MemberConsole } from './components/Members/MemberConsole';
import { StaffConsole } from './components/Staff/StaffConsole';

function App() {
  return (
  <>
    <NavB/>
    <StaffConsole/>
    
  </>
    
  );
}

export default App;
