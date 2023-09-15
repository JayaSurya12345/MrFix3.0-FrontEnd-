
import './App.css';
 import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile';
import { Routes,Route } from 'react-router';

import Feedback from './components/Feedback/Feedback';
import History from './components/History/History';
import Manage from './components/Manage/Manage';
import UserDash from './components/UserDash/UserDash';
import SearchList from './components/MainDash/SearchList/SearchList';

// import Complaints from './components/Complaints/Complaints';


function App() {
  return (
    <div id="App">
         <div className='appGlass'>
         <Sidebar/>
         <Routes>
              <Route path="" element={<MainDash/>}/>
              <Route path="/history" element={<History/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/feedback" element={<Feedback/>}/>
              <Route path="/manage" element={<Manage/>}/>
              <Route path='/userDash' element={<UserDash/>}/>
              <Route path="/searchlist" element={<SearchList/>}/>
            
         </Routes>
         </div>
    </div>
  );
}

export default App
