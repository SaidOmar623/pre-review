import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import AddScreen from './components/AddScreen';
import NavBar from './components/navbar';

function App() {
    
  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route path="/add" exact component={AddScreen} />
            <Route path="/" render={() => <MainScreen/>} />
        </Switch>
        
    </div>
  );
}

export default App;
