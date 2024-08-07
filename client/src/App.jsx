import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Home from './pages/Home';
import Meet from './pages/Meet';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import CreateSession from './pages/CreateSession';
import PostSession from './components/PostSession';

export default function App() {
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('api/session/getSessions');
      const data = await res.json();
      
      setSessions(data.sessions);
    };
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Meet />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        
        <Route path='/post_session' element={<PostSession sessions={sessions} />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/createsession' element={<CreateSession />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
