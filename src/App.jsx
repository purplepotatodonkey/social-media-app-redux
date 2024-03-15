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

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<p>You're at the root right now</p>} />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/addPost" element={<AddPostForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
