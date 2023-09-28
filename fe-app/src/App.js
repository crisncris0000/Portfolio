import './css/App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portolfio from '../src/components/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Portolfio />
      <Contact />
    </div>
  );
}

export default App;
