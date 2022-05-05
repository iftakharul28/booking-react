import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Hotel, List } from './Pages';
import './styles/scss/style.scss';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
