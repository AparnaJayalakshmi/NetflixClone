import React from 'react'
import NavBar from './components/NavBar/NavBar';
import {originals,action} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        
        <RowPost url={action} title ='Action' isSmall/>
        <RowPost url={originals} title='Netflix Originals' />
    </div>
  );
}

export default App;
