import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm';
import AddPostForm from './features/posts/AddPostForm';
import ViewPosts from './features/posts/ViewPosts';
import { Navbar } from './app/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<ViewPosts />} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/addPost" element={<AddPostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
