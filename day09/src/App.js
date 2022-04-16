import React from 'react';
import Main from './router1/Main';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './router1/About';
import Ceo from './router1/Ceo';
import Profile from './router1/Profile';
import Sub from './router1/Sub';
import Test02 from './component/Test02';

const App = () => {
  return (
    // <>
    //   <BrowserRouter>

    //     <nav>
    //       <ul>
    //         <li><Link to='/'>Main</Link></li>
    //         <li><Link to='/about'>About</Link></li>
    //         <li><Link to='/ceo'>Ceo</Link></li>
    //         <li><Link to='/profile'>Profile</Link></li>
    //         <li><Link to='/sub'>Sub</Link></li>
    //       </ul>
    //     </nav>

    //     {/* 화면에 보이는 영역 */}
    //     <Routes>
    //       <Route path='/' element={<Main/>}/>
    //       <Route path='/about' element={<About/>}/>
    //       <Route path='/ceo' element={<Ceo/>}/>
    //       <Route path='/profile' element={<Profile/>}/>
    //       <Route path='/sub' element={<Sub/>}/>
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <>
      <Test02/>
    </>
  );
};

export default App;