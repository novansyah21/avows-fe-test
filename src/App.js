import React from 'react';
import { Provider } from 'react-redux';
import store from './middleware/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';  // Ensure the CSS file is imported

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Avows Contact App</h1>
        </header>
        <main className="App-main">
          <div className="container">
            <ContactForm />
            <ContactList />
          </div>
        </main>
      </div>
    </Provider>
  );
};

export default App;
