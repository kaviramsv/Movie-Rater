import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailPage from './routes/DetailPage';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import { MovieContextProvider } from './context/moviecontext';

function App() {
  return (
    <MovieContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/update/:id" element={<UpdatePage />} />
            <Route exact path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
    </MovieContextProvider>
  );
}

export default App;
