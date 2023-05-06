import React from 'react';
import Main from './components/goods/main'
import Footer from './components/goods/footer'
import Header from './components/goods/header'
import './App.scss';

function App() {

  return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
