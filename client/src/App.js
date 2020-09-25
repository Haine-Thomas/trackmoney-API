import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MemberList } from './components/MemberList';
import { AddMember } from './components/AddMember';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
        <AddMember />
        <MemberList />
      <Footer />
    </GlobalProvider>
  );
}

export default App;