import './App.css';
import Home from './pages/home/home';
import AbcIcon from '@mui/icons-material/Abc';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Regist from './pages/login/regist';
import Posts from './component/api_comp/Posts';
import Post_create from './component/api_comp/Post_create';
import LoginApi from './component/api_comp/login';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<LoginApi />} />
        {/* <Route exact path="/login_s" element={<Login />} /> */}
        <Route exact path="regist" element={<Regist />} />
        <Route exact path="/post" element={<Posts />} />
        <Route exact path="/post/create" element={<Post_create />} />

      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
