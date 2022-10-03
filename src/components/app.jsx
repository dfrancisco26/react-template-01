import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom';
import Books from './Books';
import Home from './Home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </Router>
  );
}
