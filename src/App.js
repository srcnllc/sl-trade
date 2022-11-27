import Header from './components/Header/Header';
import Content from './pages/Content/Content';
import {
  BrowserRouter
} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Header/>
      <Content/>
     </BrowserRouter>
    </div>
  );
}

export default App;
