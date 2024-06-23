import React from 'react';
import { Provider } from 'react-redux';
import store from './middleware/store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Contact Management App</h1>
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
