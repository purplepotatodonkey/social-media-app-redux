import { useSelector } from "react-redux"
import AddPostForm from "./AddPostForm"
import ReactionButtons from "./ReactionButtons"

const ViewPosts = () => {
  const posts = useSelector(state => state.posts)

  console.log(posts)

  return (
    <>
      <AddPostForm />
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </>
  )
}

const Post = ({ post }) => {
  return (
    <>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <p>{post.user}</p>
      <p>{post.date}</p>
      <ReactionButtons postId={post.id} reactions={post.reactions} />
    </>
  )
}

export default ViewPosts;