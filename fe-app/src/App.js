import './css/App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portolfio from '../src/components/Portfolio';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Portolfio />
    </div>
  );
}

export default App;
