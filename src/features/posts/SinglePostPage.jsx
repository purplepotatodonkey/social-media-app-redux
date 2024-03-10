import { useSelector } from 'react-redux';
import TimeAgo from './TimeAgo'
import { Link, useParams } from 'react-router-dom'

const SinglePostPage = () => {
    const { postId } = useParams();

    console.log(`postId: ${postId}`)

    const post = useSelector(state => state.posts.find((post) => post.id === postId));

    if (!post) {
      return (
        <section>
          <h2>Post not found!</h2>
        </section>
      );
    }

    return (
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <div>
            <p>Insert post author here once user slice is made: {post.user}</p>
            <TimeAgo timestamp={post.date} />
          </div>
          <p className="post-content">
            {post.content}
          </p>
          <Link to={`/editPost/:${post.id}`} className="button">
            Edit Post
          </Link>
        </article>
      </section>
    )
}

export default SinglePostPage