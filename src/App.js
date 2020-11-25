import './App.css';
import Home from './components/Home';
import { Provider } from 'mobx-react';
import moviesStore from './stores/moviesStore';

function App() {
  return (
    <div className="App">
      <Provider moviesStore={moviesStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
