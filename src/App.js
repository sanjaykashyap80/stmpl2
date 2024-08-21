import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
       <Navbar />
        <Weather />
      <Footer />
    </div>
  );
}

export default App;
