// import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Bootstrap/Header';
import { Nav } from './Components/Bootstrap/NavBar';
import { Card } from './Components/Bootstrap/cards';
import { Carousel } from './Components/Bootstrap/carousel';
import { Footer } from './Components/Bootstrap/footer';

// import Practise from './Components/Practise';

function App() {
  return (
    <div className='container'>
      {/* <Practise></Practise> <br></br> */}



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Header/>
      <Nav/>
      <Carousel/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
