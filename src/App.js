import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './views/Contact';
import Home from './views/Home';
import Reviews from './views/Reviews';
import Events from './views/Events';
import Accomodation from './views/Accomodation';
import Attractions from './views/Attractions';

function App() {
  return (
    <Router>
      <div >
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/reviews' element={ <Reviews />} />
          <Route path='/events' element={ <Events />} />
          <Route path='/accomodation' element={ <Accomodation />} />
          <Route path='/attractions' element={ <Attractions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
