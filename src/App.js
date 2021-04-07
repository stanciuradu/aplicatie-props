import React from 'react';
import './App.css';
import Header from './components/Header';
import './components/Header.css';
import FurnitureItem from './components/FurnitureItem';
import './components/FurnitureItem.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <FurnitureItem 
        name='Canapea' 
        price='269999 Lei' 
        model='Chesterfield Rust Pink'
        src='https://cdn.vivre.eu/upload/2019/10/thumbs/5d9db4743f9a76.05262384.1400x1400.jpg'
      />
      <FurnitureItem 
        name='Coltar' 
        price='399999 Lei' 
        model='Choco Olympic Blue'
        src='https://cdn.vivre.eu/upload/2020/05/thumbs/5ec7a800e39063.71800599.1400x1400.jpg'
      />
      <FurnitureItem 
        name='Fotoliu' 
        price='106999 Lei' 
        model='Gauge Concept Gray'
        src='https://cdn.vivre.eu/upload/2020/12/thumbs/5fe1c0fba9f887.10045206.1400x1400.jpg'
      />
    </div>
  );
}

export default App;
