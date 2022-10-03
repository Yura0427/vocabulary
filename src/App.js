import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { End } from './pages/End';
import { Home } from './pages/Home';
import { New } from './pages/New';
import { Statistics } from './pages/Statistics';
import { Test } from './pages/Test';
import { fetchWords } from './store/actions/wordActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/test" element={<Test />} />
        <Route path="/end" element={<End />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;
