import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import SinglePostPage from './features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <p>
              You're at the root right now
            </p>
          } />
          <Route path="/posts/:postId" element={<SinglePostPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App
