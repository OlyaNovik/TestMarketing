import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';





function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/step-2" element={<Page2 />} />
            <Route path="/step-3" element={<Page3 />} />
            <Route path="/step-4" element={<Page4 />} />
            <Route path="/step-5" element={<Page5 />} />
            <Route path="/step-6" element={<Page6 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
