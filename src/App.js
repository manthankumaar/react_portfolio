
import './App.css';
import {NavBar} from './component/NavBar';
import{Banner} from './component/Banner';
import{Skills} from './component/Skills';
import{Project} from './component/Project';
import{Footer} from './component/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar /> 
     <Banner />
     <Skills />
     <Project />
     <Footer />
    </div>
  );
}

export default App;
