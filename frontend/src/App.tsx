import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './components/routes/routes';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
