import { useSelector } from 'react-redux';

const SinglePostPage = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector(state => state.posts.find((post) => post.postId === postId));

    return (
      <>
        <h1>Title:</h1>
        <p>post.title</p>
      </>
    )
}