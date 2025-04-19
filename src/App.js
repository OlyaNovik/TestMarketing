import './styles/main.css';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <header>
          <Header/>
      </header>
    
      <main className="layout__content">
         <Page1/>
      </main>
     
      <footer>
         <Footer/>
      </footer>
     
    </div>
  );
}

export default App;
