import './App.css';
import Header from './components/Header';
import { Router } from '@reach/router';
import OneTruck from './views/OneTruck';
import EditTruck from'./views/EditTruck';
import NewTruck from './views/NewTruck';
import AllTrucks from './views/AllTrucks';


function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <AllTrucks path="/" />
        <OneTruck path="/truck/:id" />
        <EditTruck path="/truck/:id/edit" />
        <NewTruck path="/truck/new" />
      </Router>
    </div>
  );
}

export default App;
