import React from 'react'
import Rotas from './Rotas';

function App() {
  return (
    <div className="App">
        <Rotas/>
    </div>
  );
}

export default App;

// import Alunos from './components/Alunos/Alunos';
// import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
// import {Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1>Alunos</h1>
//       </div>
//       <BrowserRouter>
//         <Nav variant='tabs'>
//           <Nav.Link as={Link} to='/alunos'>Cadastro de Alunos</Nav.Link>
//         </Nav>
//         <Routes>
//           <Route path='/alunos' element= {<Alunos/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
    
//   );
// }

// export default App;