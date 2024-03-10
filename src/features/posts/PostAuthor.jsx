import { useSelector } from "react-redux"

const PostAuthor = ({ userId }) => {
  const author = useSelector(state => state.users.find((user) => userId === user.id))

  return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;