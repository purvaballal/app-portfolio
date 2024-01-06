import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/" element={<About />} />
     <Route path="/" element={<Education />} />
     <Route path="/" element={<Project />} />
     <Route path="/" element={<Contact />} />
     </Routes>

    
     </BrowserRouter>
    </div>
  );
}

export default App;
