import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';

import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
    <div className="App">
      <header>
        <NavBar setActiveNav={setActiveNav} />
      </header>
      <main style={{width: '100%', height: '100vh'}}>
        <Container className='d-flex h-100' fluid>
          <Container className='m-auto border border-dark rounded h-75' style={{}}>
            <Badge>{activeNav}</Badge>
                <h1 className='text-center my-auto'>{ activeNav === 'مرحبا'? ' ' : 'SOON!!!!!!!!!!!!!'}</h1>
          </Container>
        </Container>
      </main>
    </div>
  );
}

export default App;