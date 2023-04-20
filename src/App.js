import Header from "./components/Header"
import Quiz from './components/Quiz'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

export default function App() {
  
  return (
    <div className="App">
        <Header/>
        <Quiz/>
        <Footer/>
    </div>
  );
}

