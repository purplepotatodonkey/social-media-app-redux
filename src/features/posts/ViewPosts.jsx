import { useSelector } from "react-redux"
import AddPostForm from "./AddPostForm"
import ReactionButtons from "./ReactionButtons"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import { Link } from "react-router-dom"

const ViewPosts = () => {
  const posts = useSelector(state => state.posts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <AddPostForm />
      {orderedPosts.map(post => <Post key={post.id} post={post}/>)}
    </>
  )
}

const Post = ({ post }) => {
  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content}</p>
      <ReactionButtons postId={post.id} reactions={post.reactions} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

export default ViewPosts;