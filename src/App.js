import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import bg from './images/motif.jpg'
import { Badge, Container } from 'react-bootstrap';
import { useState } from 'react';
import Company from './pages/Company';
import Zones from './pages/Zones';
import {AddingArea, AddingCourier, AddingZone, AddingCustomer} from './components/AddingCard';
import Areas from './pages/Areas';
import Couriers from './pages/Couriers';
import Customers from './pages/Customers';
import Status from './pages/Status';
import Branches, { Transfer } from './pages/Branches';
import { ZonesProvider } from './contexts/ZonesContext';
import { AreasProvider } from './contexts/AreasContext';
import { StatusProvider } from './contexts/StatusContext';
import { BranchesProvider } from './contexts/BranchesContext';

function App() {
  const [activeNav, setActiveNav] = useState('مرحبا')
  return (
                  <ZonesProvider>
                    <AreasProvider>
                    <StatusProvider>
                    <BranchesProvider>
    <div className="App">
      <header>
        <NavBar setActiveNav={setActiveNav} />
      </header>
      <main style={{width: '100%'}}>
        <Container className='d-flex ' fluid>
          <Container className='m-auto border border-dark rounded  position-relative h-100 p-4'>
            <Badge className = 'active-nav position-absolute'>{activeNav}</Badge>
                <Routes>
                  <Route path='/company' element={<Company/>}/>

                  <Route path='/zones' element={<Zones />}/>
                  <Route path='/zones/add' element={<AddingZone />}/>
                  <Route path='/areas' element={<Areas />}/>
                  <Route path='/areas/add' element={<AddingArea />}/>
                  <Route path='/couriers' element={<Couriers />}/>
                  <Route path='/couriers/add' element={<AddingCourier />}/>
                  <Route path='/customers' element={<Customers />}/>
                  <Route path='/customers/add' element={<AddingCustomer />}/>
                  <Route path='/status' element={ <Status /> }/>
                  <Route path='/status/add' element={<AddingZone />}/>
                  <Route path='/branchs' element={<Branches />}/>
                  <Route path='/transfer' element={<Transfer />}/>
                  <Route element={<h1>SOON!!!!!!!!!!!!!!!!</h1>}/>
                </Routes>
          </Container>
          
        </Container>
      </main>
      <footer >
       <Footer />
      </footer>
    </div>
    </BranchesProvider>
    </StatusProvider>
    </AreasProvider>
                  </ZonesProvider>
  );
}

export default App;
