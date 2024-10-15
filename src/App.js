import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style.css'
import Main from './components/pages/Main'
import Information from './components/pages/Information';
import Context from './context/Context';

function App() {
  return (
    <>
      <BrowserRouter>
       <Context>
       <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/information' element={<Information />} />
        </Routes>
       </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
