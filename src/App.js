import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './components/Page1';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="layout__content">
        <Page1 />
      </main>

      <Footer />

    </div>
  );
}

export default App;
